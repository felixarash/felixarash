(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_content_music_page_tsx_181bcd._.js", {

"[project]/src/app/content/music/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>MusicPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
const musicVideos = [
    {
        id: 1,
        title: 'Your Eyes Antent',
        youtubeId: 'FkPau_B6h1M',
        category: 'Close to Soul'
    },
    {
        id: 2,
        title: 'Your Eyesss',
        youtubeId: 'bSbmY4NJ4iw',
        category: 'Sacrifice For LOVE'
    },
    {
        id: 3,
        title: 'I Need to Be IN LOVE',
        youtubeId: '0lotWrWS_yA',
        category: 'Sacrifice For LOVE'
    },
    {
        id: 4,
        title: 'Hiya Hiya',
        youtubeId: '-YdzhyydUOQ',
        category: 'Happy in LOVE'
    },
    {
        id: 5,
        title: 'Only Love can hurt Like that',
        youtubeId: 'LIm0iz7pONY',
        category: 'Sacrifice For LOVE'
    },
    {
        id: 6,
        title: 'عم بتعلق فيك',
        youtubeId: 'HIYqaDGCtx8',
        category: 'Happy in LOVE'
    },
    {
        id: 7,
        title: 'Flirt in Aarab',
        youtubeId: 'bytVUsDTqFI',
        category: 'Smiling Me'
    },
    {
        id: 8,
        title: 'My Love, Close Your Eyes',
        youtubeId: 'WTEj6zshp3Y',
        category: 'Sacrifice For LOVE'
    },
    {
        id: 9,
        title: 'Mamnou',
        youtubeId: 'ZkaPjqMiTsg',
        category: 'Smiling Me'
    },
    {
        id: 10,
        title: 'Ass3ad Wahda',
        youtubeId: 'EYGkCys0z-E',
        category: 'Happy in LOVE'
    },
    {
        id: 11,
        title: 'Ta3bt Minak',
        youtubeId: 'ZZwdBV1SDIg',
        category: 'Sacrifice For LOVE'
    },
    {
        id: 12,
        title: 'Mabaash Ser',
        youtubeId: 'tEGMaKX38HQ',
        category: 'Tears'
    },
    {
        id: 13,
        title: 'Princess Emani Wedding song by Elissa',
        youtubeId: 'r6EQdFFbMx0',
        category: 'AWW I WISH'
    },
    {
        id: 14,
        title: 'Jazzet Ahlam',
        youtubeId: 'wVxLIQlytf0',
        category: 'Smiling Me'
    },
    {
        id: 15,
        title: 'The Real KHAN',
        youtubeId: 'p4jMVYVXpVY',
        category: 'Heartache'
    },
    {
        id: 16,
        title: 'asaad lel goumar ',
        youtubeId: '33qBbA0Mt6I',
        category: 'Sacrifice For LOVE'
    },
    {
        id: 17,
        title: 'Wa3d Meni',
        youtubeId: 'vnuWntGf9go',
        category: 'Happy in LOVE'
    },
    {
        id: 18,
        title: 'Last Breath',
        youtubeId: 'J6Os9R4hQeU',
        category: 'Close to Soul'
    }
];
const heavenList = [
    {
        id: 1,
        title: "Khod Balak 'Alaya",
        artist: "Elissa",
        description: "Take Care of me because i am possessive",
        sticker: "❤️‍🩹",
        link: "https://youtu.be/Im0en4s0lks" // Add actual YouTube links
    },
    {
        id: 2,
        title: "'Boadak 'Anni",
        artist: "Assala Nasri",
        description: "it really kills me",
        sticker: "🤒",
        link: "https://youtu.be/dgtRJiCv6J8"
    },
    {
        id: 3,
        title: "Almaya",
        artist: "Assala Nasri",
        description: "A soulful melody that touches the heart with its pure emotion",
        sticker: "😊",
        link: "https://youtu.be/ORcNje1W5w4" // Add actual YouTube links
    },
    {
        id: 4,
        title: "Adios",
        artist: "Rawan Bin Hussain",
        description: "The first spark of crazy love with bumbee",
        sticker: "🥰",
        link: "https://youtu.be/KZVyfrAcMbI"
    },
    {
        id: 5,
        title: "Shamekh",
        artist: "Assala Nasri",
        description: "jan 2020 just me and this song it is cold and i am dying to be with someone but yeah introvert era",
        sticker: "😮‍💨😶‍🌫️",
        link: "https://youtu.be/lAM9sNoxzIw" // Add actual YouTube links
    },
    {
        id: 6,
        title: "Wish that you were here",
        artist: "Florence + The Machine",
        description: "Euphoria of love and longing",
        sticker: "✨",
        link: "https://youtu.be/dsWDUvuF0Xc?si=9aeVf4idhUv7dQAw"
    },
    {
        id: 7,
        title: "Bala Ma Nhess",
        artist: "Abeer Nehme",
        description: "felt like a dream",
        sticker: "😻",
        link: "https://youtu.be/jHPIaq4-dgc" // Add actual YouTube links
    },
    {
        id: 8,
        title: "Bi Saraha",
        artist: "Abeer Nehme",
        description: "played this song on repeat for days",
        sticker: "😎",
        link: "https://youtu.be/rH9mDCe83v0"
    },
    {
        id: 9,
        title: "Hob Kol Hayati",
        artist: "Elissa",
        description: "A soulful melody that touches the heart with its pure emotion",
        sticker: "🥺",
        link: "https://youtu.be/InalcSwrMTA" // Add actual YouTube links
    },
    {
        id: 10,
        title: "Habibi Saudi",
        artist: "Myriam Fares",
        description: "The perfect blend of romance and rhythm",
        sticker: "😵‍💫",
        link: "https://youtu.be/DQNfsI1rFBw"
    },
    {
        id: 11,
        title: " Sabb Farhety",
        artist: "Assala Nasri, Ahmed Saad",
        description: "fantasy of love",
        sticker: "🥰",
        link: "https://youtu.be/EI2oxQd95z4" // Add actual YouTube links
    },
    {
        id: 12,
        title: "Kala Ja Pashaiman Ba",
        artist: "Akmal Yaqoob | Faheem Uddin | Noman Asmet | Islam Habib",
        description: "The perfect blend of romance and rhythm",
        sticker: "😍",
        link: "https://youtu.be/_fuh4dzg9HU"
    },
    {
        id: 13,
        title: "Yeshbahak Galbi",
        artist: "Aseel Hameem",
        description: "it hurts when they kept you without holding you forever",
        sticker: "🥲",
        link: "https://youtu.be/AspEaxovpWA?si=a3EXuCdWGCJydeCa" // Add actual YouTube links
    },
    {
        id: 14,
        title: "Sid Lghram",
        artist: "Assala Nasri & Asma Lmnawar",
        description: "The perfect blend of love and rhythm",
        sticker: "🕺🏼",
        link: "https://youtu.be/q04GS_YvWr4?si=PkBqtsTVi9MBX-nw"
    },
    {
        id: 15,
        title: "Tenadeek",
        artist: "Majid Al Mohandis",
        description: "Enchanting i have felt",
        sticker: "😼",
        link: "https://youtu.be/HMHnPZta3CQ?si=loCMtYzcsPFjuQsL" // Add actual YouTube links
    },
    {
        id: 16,
        title: "Shokran",
        artist: "Assala Nasri",
        description: "her thanks to world is so beautiful",
        sticker: "🤝",
        link: "https://youtu.be/WT-W27kxDXQ"
    },
    {
        id: 17,
        title: "Aman Aman",
        artist: "Assala Nasri",
        description: "iraqi accent of hers made me remind of my ancesstors land and their love",
        sticker: "🫀",
        link: "https://youtu.be/4djPPKP3aHs" // Add actual YouTube links
    },
    {
        id: 18,
        title: "Ani Alaqwa [Korek Telecom]",
        artist: "Rahma Riad",
        description: "Pure iraqi love",
        sticker: "👩‍🎓",
        link: "https://youtu.be/cjNuH4uqjko"
    },
    {
        id: 19,
        title: "Hiya Hiya",
        artist: "Majid Al Mohandis",
        description: "his voice is magical i love his all songs",
        sticker: "👦🏻",
        link: "https://youtu.be/FGp2Ylx1QVs" // Add actual YouTube links
    },
    {
        id: 20,
        title: "Al Fatena",
        artist: "Majid Al Mohandis",
        description: "AWW how i was madly riding to you while listening to this song",
        sticker: "🏝",
        link: "https://youtu.be/-Ylbg-gd_Kc" // Add actual YouTube links
    }
];
function MusicPage() {
    _s();
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentCategory, setCurrentCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [activeVideo, setActiveVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(musicVideos[0]);
    const [key, setKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const playerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoGridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heavenListRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isHeaderVisible, setIsHeaderVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MusicPage.useEffect": ()=>{
            setIsClient(true);
        }
    }["MusicPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MusicPage.useEffect": ()=>{
            const handleScroll = {
                "MusicPage.useEffect.handleScroll": ()=>{
                    const currentScrollY = window.scrollY;
                    if (currentScrollY > 100) {
                        setIsHeaderVisible(false);
                    } else {
                        setIsHeaderVisible(true);
                    }
                }
            }["MusicPage.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "MusicPage.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["MusicPage.useEffect"];
        }
    }["MusicPage.useEffect"], []);
    const handleVideoSelect = (video)=>{
        setActiveVideo(video);
        setKey((prev)=>prev + 1);
        setIsPlaying(true);
        playerRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    };
    const togglePlayback = ()=>{
        setIsPlaying(!isPlaying);
    };
    const handleCategoryClick = (category)=>{
        setCurrentCategory(category);
        // Scroll to appropriate section with offset for sticky header
        setTimeout(()=>{
            const headerOffset = isHeaderVisible ? 100 : 60; // Adjust offset based on header visibility
            if (category === 'Heaven List') {
                heavenListRef.current?.scrollIntoView({
                    behavior: 'smooth'
                });
                window.scrollBy(0, -headerOffset);
            } else {
                videoGridRef.current?.scrollIntoView({
                    behavior: 'smooth'
                });
                window.scrollBy(0, -headerOffset);
            }
        }, 100);
    };
    const categories = [
        'All',
        'Heaven List',
        ...new Set(musicVideos.map((video)=>video.category))
    ];
    const filteredVideos = currentCategory === 'All' ? musicVideos : musicVideos.filter((video)=>video.category === currentCategory);
    if (!isClient) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/content/music/page.tsx",
            lineNumber: 363,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container mx-auto px-4 py-8",
        style: {
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-5 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "\\images\\Cheshire_head.svg",
                        alt: "Music icon",
                        width: 78,
                        height: 78,
                        className: "animate-bounce"
                    }, void 0, false, {
                        fileName: "[project]/src/app/content/music/page.tsx",
                        lineNumber: 378,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-center",
                        children: "Music Gallery"
                    }, void 0, false, {
                        fileName: "[project]/src/app/content/music/page.tsx",
                        lineNumber: 385,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "\\images\\Cheshire_head.svg",
                        alt: "Music icon",
                        width: 78,
                        height: 78,
                        className: "animate-bounce"
                    }, void 0, false, {
                        fileName: "[project]/src/app/content/music/page.tsx",
                        lineNumber: 386,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/content/music/page.tsx",
                lineNumber: 377,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                ref: playerRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg bg-black",
                        children: [
                            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center bg-black/50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/content/music/page.tsx",
                                    lineNumber: 400,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/content/music/page.tsx",
                                lineNumber: 399,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                src: `https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=${isPlaying ? 1 : 0}&rel=0&playsinline=1&origin=${window.location.origin}`,
                                title: activeVideo.title,
                                className: "absolute inset-0 w-full h-full",
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; playsinline",
                                allowFullScreen: true,
                                onLoad: ()=>setIsLoading(false),
                                onLoadStart: ()=>setIsLoading(true)
                            }, key, false, {
                                fileName: "[project]/src/app/content/music/page.tsx",
                                lineNumber: 403,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/content/music/page.tsx",
                        lineNumber: 397,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold",
                                children: activeVideo.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/content/music/page.tsx",
                                lineNumber: 415,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: togglePlayback,
                                className: "p-2 rounded-full hover:bg-gray-100",
                                "aria-label": isPlaying ? 'Pause' : 'Play',
                                children: isPlaying ? 'Pause' : 'Play'
                            }, void 0, false, {
                                fileName: "[project]/src/app/content/music/page.tsx",
                                lineNumber: 416,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/content/music/page.tsx",
                        lineNumber: 414,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/content/music/page.tsx",
                lineNumber: 396,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
        sticky ${isHeaderVisible ? 'top-16' : 'top-0'} 
        z-20 -mx-4 px-4 py-4 
        bg-white/95 backdrop-blur-sm shadow-sm
        transition-all duration-300
      `,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-nowrap gap-3 overflow-x-auto pb-2 scrollbar-hide",
                        children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleCategoryClick(category),
                                className: `
                  px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap
                  ${currentCategory === category ? 'bg-gray-900 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}
                `,
                                children: category
                            }, category, false, {
                                fileName: "[project]/src/app/content/music/page.tsx",
                                lineNumber: 436,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/content/music/page.tsx",
                        lineNumber: 434,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/content/music/page.tsx",
                    lineNumber: 433,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/content/music/page.tsx",
                lineNumber: 427,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: videoGridRef,
                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4",
                children: filteredVideos.map((video)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>handleVideoSelect(video),
                        className: `relative aspect-video cursor-pointer group overflow-hidden rounded-lg bg-gray-100 ${activeVideo.id === video.id ? 'ring-2 ring-gray-900' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`,
                                    alt: video.title,
                                    fill: true,
                                    className: "object-cover transition-transform duration-300 group-hover:scale-110",
                                    sizes: "(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/content/music/page.tsx",
                                    lineNumber: 468,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/content/music/page.tsx",
                                lineNumber: 467,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPlay"], {
                                    className: "w-12 h-12 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/content/music/page.tsx",
                                    lineNumber: 477,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/content/music/page.tsx",
                                lineNumber: 476,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white font-medium truncate",
                                    children: video.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/content/music/page.tsx",
                                    lineNumber: 480,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/content/music/page.tsx",
                                lineNumber: 479,
                                columnNumber: 13
                            }, this)
                        ]
                    }, video.id, true, {
                        fileName: "[project]/src/app/content/music/page.tsx",
                        lineNumber: 460,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/content/music/page.tsx",
                lineNumber: 455,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: heavenListRef,
                className: "mt-16 pt-16 border-t border-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFolder"], {
                                    className: "w-6 h-6 text-gray-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/content/music/page.tsx",
                                    lineNumber: 493,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold",
                                    children: "Heaven List"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/content/music/page.tsx",
                                    lineNumber: 494,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl",
                                    children: "🌠"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/content/music/page.tsx",
                                    lineNumber: 495,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/content/music/page.tsx",
                            lineNumber: 492,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: heavenList.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group border-b border-gray-100 last:border-0 py-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xl flex-shrink-0",
                                                        children: item.sticker
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/content/music/page.tsx",
                                                        lineNumber: 506,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "truncate",
                                                        children: [
                                                            item.link ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: item.link,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "font-medium hover:text-blue-600 transition-colors",
                                                                children: item.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/content/music/page.tsx",
                                                                lineNumber: 509,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                children: item.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/content/music/page.tsx",
                                                                lineNumber: 518,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mx-2 text-gray-400",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/content/music/page.tsx",
                                                                lineNumber: 520,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-600",
                                                                children: item.artist
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/content/music/page.tsx",
                                                                lineNumber: 521,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/content/music/page.tsx",
                                                        lineNumber: 507,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/content/music/page.tsx",
                                                lineNumber: 505,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 hidden group-hover:block transition-all",
                                                children: item.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/content/music/page.tsx",
                                                lineNumber: 524,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/content/music/page.tsx",
                                        lineNumber: 504,
                                        columnNumber: 17
                                    }, this)
                                }, item.id, false, {
                                    fileName: "[project]/src/app/content/music/page.tsx",
                                    lineNumber: 500,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/content/music/page.tsx",
                            lineNumber: 498,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/content/music/page.tsx",
                    lineNumber: 491,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/content/music/page.tsx",
                lineNumber: 487,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/content/music/page.tsx",
        lineNumber: 367,
        columnNumber: 5
    }, this);
}
_s(MusicPage, "SymzLkG4G1QSN+YTEuTmk6kN/d0=");
_c = MusicPage;
var _c;
__turbopack_refresh__.register(_c, "MusicPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/content/music/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_content_music_page_tsx_181bcd._.js.map