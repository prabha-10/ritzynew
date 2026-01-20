import React, { useState } from 'react';
import {
    ShieldCheck,
    Tv,
    Zap,
    Smartphone,
    Film,
    Heart,
    Headset
} from 'lucide-react';

export const DashboardWidgets = () => {
    const [temp, setTemp] = useState(21);

    const increaseTemp = () => setTemp(prev => Math.min(prev + 1, 30));
    const decreaseTemp = () => setTemp(prev => Math.max(prev - 1, 16));

    return (
        <>
            {/* Widget 1: Security - Full Card Image Style */}
            <div className="min-w-[75vw] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[400px] snap-center bg-gray-900 text-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-800 group h-[300px] md:h-[380px] flex flex-col relative overflow-hidden">
                {/* Full Background Image */}
                <img
                    src="/assets/images/img_a8927807bd8b.jpg"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    alt="Front Gate Camera Feed"
                />
                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/60" />

                {/* Header */}
                <div className="flex justify-between items-start mb-6 relative z-10">
                    <h3 className="text-xl font-bold text-white">Outdoor Camera</h3>
                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur px-3 py-1 rounded-full border border-white/10">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-bold text-white">REC</span>
                    </div>
                </div>

                {/* Center - Live Indicator */}
                <div className="flex-1 relative z-10 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md mx-auto mb-4 flex items-center justify-center border-2 border-white/20">
                            <ShieldCheck size={32} className="text-white" />
                        </div>
                        <p className="text-white/90 text-sm mb-1 font-medium">All Systems Normal</p>
                        <p className="text-white/60 text-xs">No unusual activity detected</p>
                    </div>
                </div>

                {/* Bottom Status */}
                <div className="flex items-center justify-between text-xs relative z-10">
                    <span className="text-white/70 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        Front Gate
                    </span>
                    <span className="text-white/70">{new Date().toLocaleTimeString()}</span>
                </div>
            </div>

            {/* Widget 2: Media */}
            <div className="min-w-[75vw] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[400px] snap-center bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 h-[300px] md:h-[380px] flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold">Now Playing</h3>
                    <Tv size={28} />
                </div>

                <div className="flex-1 flex items-center justify-center">
                    <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl p-4 flex gap-4 items-center">
                        <div className="w-16 h-16 bg-black/30 rounded-lg flex-shrink-0" />
                        <div className="overflow-hidden">
                            <p className="font-bold truncate">Jazz Vibes</p>
                            <p className="text-sm text-white/70 truncate">Spotify • Living Room</p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-3">
                    <button className="flex-1 bg-white/20 backdrop-blur hover:bg-white/30 transition-all py-3 rounded-xl font-semibold text-sm">Resume</button>
                    <button className="flex-1 bg-white/20 backdrop-blur hover:bg-white/30 transition-all py-3 rounded-xl font-semibold text-sm">Stop</button>
                </div>
            </div>

            {/* Widget 3: Energy */}
            <div className="min-w-[75vw] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[400px] snap-center bg-gradient-to-br from-green-500 to-emerald-600 text-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 h-[300px] md:h-[380px] flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold">Energy Usage</h3>
                    <Zap size={28} />
                </div>

                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <div className="text-6xl font-bold mb-2">2.4<span className="text-3xl">kW</span></div>
                        <p className="text-white/80 text-sm mb-4">Current Consumption</p>
                        <div className="flex items-center justify-center gap-2 text-xs bg-white/20 rounded-full px-4 py-2">
                            <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                            <span>15% below average</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-white/20 rounded-xl p-2">
                        <p className="text-white/70">Today</p>
                        <p className="font-bold">47kWh</p>
                    </div>
                    <div className="bg-white/20 rounded-xl p-2">
                        <p className="text-white/70">Week</p>
                        <p className="font-bold">312kWh</p>
                    </div>
                    <div className="bg-white/20 rounded-xl p-2">
                        <p className="text-white/70">Month</p>
                        <p className="font-bold">1.2MWh</p>
                    </div>
                </div>
            </div>

            {/* Widget 4: Security Status */}
            <div className="min-w-[75vw] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[400px] snap-center bg-gradient-to-br from-gray-700 to-gray-900 text-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 h-[300px] md:h-[380px] flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold">Security</h3>
                    <ShieldCheck size={28} />
                </div>

                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-24 h-24 rounded-full bg-green-500/20 mx-auto mb-4 flex items-center justify-center border-4 border-green-500">
                            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
                                <ShieldCheck size={32} />
                            </div>
                        </div>
                        <p className="font-bold text-lg mb-2">System Armed</p>
                        <p className="text-green-400 text-sm">All zones secure</p>
                    </div>
                </div>

                <button className="bg-white/10 backdrop-blur hover:bg-white/20 transition-all py-3 rounded-xl font-semibold">
                    Disarm System
                </button>
            </div>

            {/* Widget 5: Voice Assistant */}
            <div className="min-w-[75vw] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[400px] snap-center bg-gradient-to-br from-orange-500 to-red-600 text-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 h-[300px] md:h-[380px] flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold">Voice Control</h3>
                    <Smartphone size={28} />
                </div>

                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur mx-auto mb-4 flex items-center justify-center">
                            <Smartphone size={40} />
                        </div>
                        <p className="font-bold text-lg mb-2">Hey Ritzy</p>
                        <p className="text-white/80 text-sm">Listening...</p>
                    </div>
                </div>

                <div className="space-y-2 text-xs">
                    <p className="text-white/70">Recent Commands:</p>
                    <p className="bg-white/20 rounded-lg p-2">"Turn on living room lights"</p>
                    <p className="bg-white/20 rounded-lg p-2">"Set temperature to 22°"</p>
                </div>
            </div>

            {/* Widget 6: Entertainment */}
            <div className="min-w-[75vw] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[400px] snap-center bg-gradient-to-br from-violet-500 to-purple-600 text-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 h-[300px] md:h-[380px] flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold">Movie Night</h3>
                    <Film size={28} />
                </div>

                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur mx-auto mb-4 flex items-center justify-center">
                            <Film size={40} />
                        </div>
                        <p className="font-bold text-lg mb-2">Scene Ready</p>
                        <p className="text-white/80 text-sm">Dim lights, close shades, turn on TV</p>
                    </div>
                </div>

                <button className="bg-white/20 backdrop-blur hover:bg-white/30 transition-all py-3 rounded-xl font-semibold">
                    Start Movie Scene
                </button>
            </div>

            {/* Widget 7: Favorites */}
            <div className="min-w-[75vw] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[400px] snap-center bg-gradient-to-br from-rose-500 to-pink-600 text-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 h-[300px] md:h-[380px] flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold">My Scenes</h3>
                    <Heart size={28} />
                </div>

                <div className="flex-1 space-y-3">
                    <button className="w-full bg-white/20 backdrop-blur hover:bg-white/30 transition-all p-4 rounded-xl text-left">
                        <p className="font-semibold">Good Morning</p>
                        <p className="text-xs text-white/70">Lights • Coffee • News</p>
                    </button>
                    <button className="w-full bg-white/20 backdrop-blur hover:bg-white/30 transition-all p-4 rounded-xl text-left">
                        <p className="font-semibold">Dinner Time</p>
                        <p className="text-xs text-white/70">Ambient lighting • Music</p>
                    </button>
                    <button className="w-full bg-white/20 backdrop-blur hover:bg-white/30 transition-all p-4 rounded-xl text-left">
                        <p className="font-semibold">Good Night</p>
                        <p className="text-xs text-white/70">Secure • Dim • Alarm</p>
                    </button>
                </div>
            </div>

            {/* Widget 8: Support */}
            <div className="min-w-[75vw] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[400px] snap-center bg-gradient-to-br from-amber-500 to-yellow-600 text-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 h-[300px] md:h-[380px] flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold">24/7 Support</h3>
                    <Headset size={28} />
                </div>

                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur mx-auto mb-4 flex items-center justify-center">
                            <Headset size={40} />
                        </div>
                        <p className="font-bold text-lg mb-2">Need Help?</p>
                        <p className="text-white/80 text-sm">Our concierge is here for you</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <button className="bg-white/20 backdrop-blur hover:bg-white/30 transition-all py-3 rounded-xl font-semibold text-sm">
                        Chat
                    </button>
                    <button className="bg-white/20 backdrop-blur hover:bg-white/30 transition-all py-3 rounded-xl font-semibold text-sm">
                        Call
                    </button>
                </div>
            </div>
        </>
    );
};
        </>
    );
};
