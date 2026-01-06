import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { videos, currentUser } from '@/lib/mockData';
import { User, Mail, Calendar, Settings, Shield, Bell, Palette, RefreshCw } from 'lucide-react';

export default function Profile() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground flex flex-col">
            <Header />
            <Sidebar />

            <main className="flex-1 w-full max-w-[1600px] mx-auto pt-[4.5rem] px-4 md:px-8 pb-12">
                {/* Profile Header */}
                <div className="mt-6 mb-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 rounded-xl border-2 border-black dark:border-white bg-gradient-to-br from-primary to-secondary text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                        <div className="w-24 h-24 rounded-xl border-4 border-white overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">
                            <img src={currentUser.avatarUrl} alt={currentUser.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                            <h1 className="text-4xl md:text-5xl font-black font-display uppercase leading-none tracking-tighter mb-2">
                                {currentUser.name}
                            </h1>
                            <p className="text-lg opacity-90 font-mono">{currentUser.email}</p>
                            <p className="text-sm opacity-75 font-mono mt-2">Member since December 2024</p>
                        </div>
                        <button className="neo-button bg-white text-black border-white hover:bg-white/90 px-6 py-3 flex items-center gap-2">
                            <RefreshCw size={20} strokeWidth={2.5} />
                            Switch Account
                        </button>
                    </div>
                </div>

                {/* Account Details */}
                <div className="space-y-6">
                    <div className="p-6 neo-box bg-background">
                        <h2 className="text-2xl font-black uppercase font-display tracking-tight mb-6 flex items-center gap-2">
                            <User size={24} strokeWidth={2.5} />
                            Personal Information
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold uppercase tracking-wide mb-2 text-muted-foreground">Full Name</label>
                                <div className="neo-input h-12 flex items-center bg-muted">
                                    {currentUser.name}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold uppercase tracking-wide mb-2 text-muted-foreground">Email Address</label>
                                <div className="neo-input h-12 flex items-center bg-muted">
                                    <Mail size={16} className="mr-2 text-muted-foreground" />
                                    {currentUser.email}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold uppercase tracking-wide mb-2 text-muted-foreground">Member Since</label>
                                <div className="neo-input h-12 flex items-center bg-muted">
                                    <Calendar size={16} className="mr-2 text-muted-foreground" />
                                    December 16, 2024
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold uppercase tracking-wide mb-2 text-muted-foreground">Account Status</label>
                                <div className="neo-input h-12 flex items-center bg-muted">
                                    <Shield size={16} className="mr-2 text-green-500" />
                                    <span className="text-green-500 font-bold">Active</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 neo-box bg-background">
                        <h2 className="text-2xl font-black uppercase font-display tracking-tight mb-6 flex items-center gap-2">
                            <Settings size={24} strokeWidth={2.5} />
                            Preferences
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 border-2 border-black/10 dark:border-white/10 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <Bell size={20} className="text-muted-foreground" />
                                    <div>
                                        <p className="font-bold">Email Notifications</p>
                                        <p className="text-sm text-muted-foreground">Receive updates about new videos</p>
                                    </div>
                                </div>
                                <button className="neo-button bg-primary text-white px-4 py-2 text-sm">Enabled</button>
                            </div>
                            <div className="flex items-center justify-between p-4 border-2 border-black/10 dark:border-white/10 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <Palette size={20} className="text-muted-foreground" />
                                    <div>
                                        <p className="font-bold">Theme Preference</p>
                                        <p className="text-sm text-muted-foreground">Choose your preferred theme</p>
                                    </div>
                                </div>
                                <button className="neo-button bg-secondary text-white px-4 py-2 text-sm">Dark Mode</button>
                            </div>
                            <div className="flex items-center justify-between p-4 border-2 border-black/10 dark:border-white/10 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <Shield size={20} className="text-muted-foreground" />
                                    <div>
                                        <p className="font-bold">Privacy Settings</p>
                                        <p className="text-sm text-muted-foreground">Manage your privacy preferences</p>
                                    </div>
                                </div>
                                <button className="neo-button bg-background border-black dark:border-white px-4 py-2 text-sm">Configure</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
