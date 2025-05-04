"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { auth } from '@/services/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            if (user) {
                setIsAdmin(user.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL);
            } else {
                setIsAdmin(false);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push('/');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 bg-black text-white p-4 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    John Doe
                </Link>
                <div className="flex items-center space-x-4">
                    <Link href="/about" className="hover:text-gray-300">
                        About
                    </Link>
                    <Link href="/faq" className="hover:text-gray-300">
                        FAQ
                    </Link>
                    {isAdmin && (
                        <Link
                            href="/admin"
                            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors"
                        >
                            後台
                        </Link>
                    )}
                    {user ? (
                        <div className="flex items-center space-x-4">
                            <span className="text-sm">{user.email}</span>
                            <button
                                onClick={handleLogout}
                                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition-colors"
                            >
                                登出
                            </button>
                        </div>
                    ) : (
                        <Link
                            href="/admin-login"
                            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors"
                        >
                            登入管理後台
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
} 