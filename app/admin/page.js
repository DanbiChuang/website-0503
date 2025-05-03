'use client';

import { useState, useEffect } from 'react';
import { db, auth } from "@/services/firebase";
import { collection, addDoc, serverTimestamp, getDocs, deleteDoc, doc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

export default function AdminPage() {
    const [activeTab, setActiveTab] = useState('projects');
    const [formData, setFormData] = useState({
        title: '',
        image: '',
        description: ''
    });
    const [projects, setProjects] = useState([]);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            if (user) {
                const isAdminUser = user.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL;
                setIsAdmin(isAdminUser);
                if (!isAdminUser) {
                    router.push('/');
                }
            } else {
                router.push('/');
            }
            setIsLoading(false);
        });

        fetchProjects();

        return () => unsubscribe();
    }, [router]);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error signing out: ", error);
            alert('登出失敗');
        }
    };

    const fetchProjects = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "project-list"));
            const projectsList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setProjects(projectsList);
        } catch (error) {
            console.error("Error fetching projects: ", error);
            alert('獲取作品列表失敗');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "project-list"), {
                ...formData,
                createdAt: serverTimestamp()
            });

            alert('作品新增成功！');
            setFormData({ title: '', image: '', description: '' });
            fetchProjects();
        } catch (error) {
            console.error("Error adding document: ", error);
            alert(`新增失敗: ${error.message}`);
        }
    };

    const handleDelete = async (projectId) => {
        if (window.confirm('確定要刪除這個作品嗎？')) {
            try {
                await deleteDoc(doc(db, "project-list", projectId));
                alert('作品刪除成功！');
                fetchProjects();
            } catch (error) {
                console.error("Error deleting document: ", error);
                alert('刪除失敗');
            }
        }
    };

    const handleEdit = (project) => {
        // TODO: 實現編輯功能
        console.log('Edit project:', project);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'projects':
                return (
                    <div className="space-y-6">
                        {/* 新增作品表單 */}
                        <div className="bg-white shadow rounded-lg p-6">
                            <h1 className="text-2xl font-bold text-gray-900 mb-6">新增作品</h1>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                        標題
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base text-lg p-2"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                        圖片網址
                                    </label>
                                    <input
                                        type="text"
                                        id="image"
                                        name="image"
                                        value={formData.image}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base text-lg p-2"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                        敘述
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows={4}
                                        value={formData.description}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base text-lg p-2"
                                        required
                                    />
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        新增作品
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* 作品列表 */}
                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">現有作品清單</h2>
                            <div className="grid grid-cols-2 gap-6">
                                {projects.map(project => (
                                    <ProductCard
                                        key={project.id}
                                        image={project.image}
                                        title={project.title}
                                        description={project.description}
                                        isAdmin={true}
                                        onEdit={() => handleEdit(project)}
                                        onDelete={() => handleDelete(project.id)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 'faq':
                return (
                    <div className="bg-white shadow rounded-lg p-6">
                        <h1 className="text-2xl font-bold text-gray-900 mb-6">問答管理</h1>
                        {/* FAQ 管理內容將在這裡 */}
                    </div>
                );
            case 'messages':
                return (
                    <div className="bg-white shadow rounded-lg p-6">
                        <h1 className="text-2xl font-bold text-gray-900 mb-6">收件管理</h1>
                        {/* 收件管理內容將在這裡 */}
                    </div>
                );
            default:
                return null;
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
                    <p className="mt-4 text-gray-700">驗證登入身份中...</p>
                </div>
            </div>
        );
    }

    if (!isAdmin) {
        return null; // Will be redirected by useEffect
    }

    return (
        <div className="min-h-screen bg-gray-100">
            {/* 登入狀態顯示區 */}
            <div className="bg-white shadow mb-4">
                <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="text-gray-700">
                        {user ? (
                            <span>目前登入者: {user.email}</span>
                        ) : (
                            <span>目前尚未登入</span>
                        )}
                    </div>
                    {user && (
                        <button
                            onClick={handleSignOut}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                        >
                            登出
                        </button>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4 p-4">
                {/* 左側選單區 */}
                <div className="col-span-1">
                    <div className="bg-white shadow rounded-lg p-4">
                        <nav className="space-y-2">
                            <Link
                                href="/admin"
                                className="block w-full text-left px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                            >
                                作品管理
                            </Link>
                            <button
                                onClick={() => setActiveTab('projects')}
                                className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'projects'
                                    ? 'bg-indigo-100 text-indigo-700'
                                    : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                新增作品
                            </button>
                            <button
                                onClick={() => setActiveTab('faq')}
                                className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'faq'
                                    ? 'bg-indigo-100 text-indigo-700'
                                    : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                問答管理
                            </button>
                            <button
                                onClick={() => setActiveTab('messages')}
                                className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'messages'
                                    ? 'bg-indigo-100 text-indigo-700'
                                    : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                收件管理
                            </button>
                        </nav>
                    </div>
                </div>

                {/* 右側管理區 */}
                <div className="col-span-3">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}
