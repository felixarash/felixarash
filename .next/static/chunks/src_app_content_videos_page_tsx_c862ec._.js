(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_content_videos_page_tsx_c862ec._.js", {

"[project]/src/app/content/videos/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>VideosPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$virtual$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-virtual/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
const videos = [
    {
        id: 1,
        title: 'A Day in My Life',
        description: 'Follow me around as I explore the city and share my daily routines',
        youtubeId: 'M-SIpYJ3Ni0',
        category: 'Vlogs',
        date: '2023-09-17'
    },
    {
        id: 2,
        title: '21 Birthday with Ehsan',
        description: 'My soulmate bestie wished me happy birthday',
        youtubeId: '5RlPsZMKnAo',
        category: 'Sea',
        date: '2024-01-14'
    },
    {
        id: 3,
        title: 'Cat at Hill Park',
        description: 'Beautiful evening walk and found this',
        youtubeId: '4hmlrkboDZs',
        category: 'Cats',
        date: '2024-01-13'
    },
    {
        id: 4,
        title: 'Visit to Bahria Town, Karachi',
        description: 'a long drive with ehsan in November 2024',
        youtubeId: 'uynLmHiTQgk',
        category: 'Vlogs',
        date: '2024-01-12'
    },
    {
        id: 5,
        title: 'Cat at Hill Park',
        description: '😊',
        youtubeId: '4XeJyh72kpI',
        category: 'Cats',
        date: '2024-01-11'
    },
    {
        id: 6,
        title: 'Lowset weight era',
        description: 'that locket lol',
        youtubeId: 'cHMm54baOWw',
        category: 'Vlogs',
        date: '2024-01-10'
    },
    {
        id: 7,
        title: 'a aesthtic evening at hill park',
        description: 'survived truly',
        youtubeId: 'E7QtuQbLxeU',
        category: 'Vlogs',
        date: '2024-01-09'
    },
    {
        id: 8,
        title: 'I love this view,,,',
        description: 'China ports poles',
        youtubeId: '6aMp2UCfoMQ',
        category: 'Vlogs',
        date: '2024-01-08'
    },
    {
        id: 9,
        title: 'Having Food for the first time lol',
        description: 'Me and MrB',
        youtubeId: 'SCybn5t0tnw',
        category: 'Food',
        date: '2024-01-07'
    },
    {
        id: 10,
        title: 'Me and my life at duet',
        description: 'just a slowmo when i see it now it is full of cringe',
        youtubeId: 'iH_MtIBv1pY',
        category: 'Vlogs',
        date: '2024-01-06'
    },
    {
        id: 11,
        title: 'Dhoraji Bahadurabad',
        description: 'Me with A4 Squad',
        youtubeId: '1PVNd5NzW4U',
        category: 'Food',
        date: '2024-01-05'
    },
    {
        id: 12,
        title: 'The Art of Mindfulness',
        description: 'Understanding presence and conscious living',
        youtubeId: 'cLrlAH-YpWg',
        category: 'Sea',
        date: '2024-01-04'
    },
    {
        id: 13,
        title: 'Me and Sea',
        description: 'how kid i was',
        youtubeId: 'WDRSmc7zzOE',
        category: 'Vlogs',
        date: '2024-01-03'
    },
    {
        id: 14,
        title: 'LOVE FOR OCEAN',
        description: '.....💙',
        youtubeId: 'LKT1ZlcaKh4',
        category: 'Sea',
        date: '2024-01-02'
    },
    {
        id: 15,
        title: 'Beach Day',
        description: 'Hawks Bay',
        youtubeId: 'WP51aPYSggw',
        category: 'Sea',
        date: '2024-01-01'
    },
    {
        id: 16,
        title: 'Cringe Me',
        description: 'OK NVM',
        youtubeId: '9OKp9QsYuo4',
        category: 'Vlogs',
        date: '2023-12-31'
    },
    {
        id: 17,
        title: 'Traditional Dessert',
        description: 'Chocolate Brownie',
        youtubeId: 'jwu45jgWETg',
        category: 'Food',
        date: '2023-12-30'
    },
    {
        id: 18,
        title: 'Finding Purpose',
        description: 'Exploring the meaning of life and personal growth LOL',
        youtubeId: 'f-3RvHL4az8',
        category: 'Vlogs',
        date: '2023-12-29'
    }
];
function VideoGrid({ videos, onSelectVideo }) {
    _s();
    const parentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Calculate columns based on screen size
    const getColumns = ()=>{
        if (!parentRef.current) return 1;
        const width = parentRef.current.offsetWidth;
        if (width >= 1536) return 4; // 2xl
        if (width >= 1024) return 3; // lg
        if (width >= 640) return 2; // sm
        return 1; // mobile
    };
    const rowVirtualizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$virtual$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useVirtualizer"])({
        count: Math.ceil(videos.length / getColumns()),
        getScrollElement: {
            "VideoGrid.useVirtualizer[rowVirtualizer]": ()=>parentRef.current
        }["VideoGrid.useVirtualizer[rowVirtualizer]"],
        estimateSize: {
            "VideoGrid.useVirtualizer[rowVirtualizer]": ()=>380
        }["VideoGrid.useVirtualizer[rowVirtualizer]"],
        overscan: 5,
        horizontal: false
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: parentRef,
        className: "h-[calc(100vh-200px)] overflow-auto px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                height: `${rowVirtualizer.getTotalSize()}px`,
                position: 'relative',
                width: '100%'
            },
            children: rowVirtualizer.getVirtualItems().map((virtualRow)=>{
                const columns = getColumns();
                const firstIndex = virtualRow.index * columns;
                const videoSlice = videos.slice(firstIndex, firstIndex + columns);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    style: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        transform: `translateY(${virtualRow.start}px)`
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6",
                        children: videoSlice.map((video)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>onSelectVideo(video),
                                className: "group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative aspect-video",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`,
                                                alt: video.title,
                                                className: "object-cover w-full h-full transition-transform duration-300 group-hover:scale-105",
                                                width: 640,
                                                height: 360,
                                                priority: video.id <= 6,
                                                loading: video.id <= 6 ? "eager" : "lazy",
                                                quality: 85,
                                                sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/content/videos/page.tsx",
                                                lineNumber: 219,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPlay"], {
                                                    className: "w-10 h-10 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/content/videos/page.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/content/videos/page.tsx",
                                                lineNumber: 230,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/content/videos/page.tsx",
                                        lineNumber: 218,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-lg mb-2 line-clamp-1 text-gray-900",
                                                children: video.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/content/videos/page.tsx",
                                                lineNumber: 236,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 text-sm mb-3 line-clamp-2 min-h-[2.5rem]",
                                                children: video.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/content/videos/page.tsx",
                                                lineNumber: 239,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between text-sm text-gray-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaYoutube"], {
                                                                className: "text-red-600 w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/content/videos/page.tsx",
                                                                lineNumber: 244,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "YouTube"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/content/videos/page.tsx",
                                                                lineNumber: 245,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/content/videos/page.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-400",
                                                        children: new Date(video.date).toLocaleDateString(undefined, {
                                                            year: 'numeric',
                                                            month: 'short',
                                                            day: 'numeric'
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/content/videos/page.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/content/videos/page.tsx",
                                                lineNumber: 242,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/content/videos/page.tsx",
                                        lineNumber: 235,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, video.id, true, {
                                fileName: "[project]/src/app/content/videos/page.tsx",
                                lineNumber: 213,
                                columnNumber: 19
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/content/videos/page.tsx",
                        lineNumber: 211,
                        columnNumber: 15
                    }, this)
                }, virtualRow.index, false, {
                    fileName: "[project]/src/app/content/videos/page.tsx",
                    lineNumber: 201,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/app/content/videos/page.tsx",
            lineNumber: 188,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/content/videos/page.tsx",
        lineNumber: 187,
        columnNumber: 5
    }, this);
}
_s(VideoGrid, "MrU+JLmpnbghKJxjyNF3rWTPj/w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$virtual$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useVirtualizer"]
    ];
});
_c = VideoGrid;
function VideosPage() {
    _s1();
    const [currentCategory, setCurrentCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [selectedVideo, setSelectedVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const categories = [
        'All',
        ...new Set(videos.map((video)=>video.category))
    ];
    const filteredVideos = currentCategory === 'All' ? videos : videos.filter((video)=>video.category === currentCategory);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold mb-8 text-center",
                    children: "Video Gallery"
                }, void 0, false, {
                    fileName: "[project]/src/app/content/videos/page.tsx",
                    lineNumber: 281,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap justify-center gap-4 mb-8",
                    children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setCurrentCategory(category),
                            className: `px-4 py-2 rounded-lg transition-all duration-200 ${currentCategory === category ? 'bg-gray-900 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`,
                            children: category
                        }, category, false, {
                            fileName: "[project]/src/app/content/videos/page.tsx",
                            lineNumber: 286,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/content/videos/page.tsx",
                    lineNumber: 284,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-pulse grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: [
                            ...Array(6)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-200 rounded-xl h-[350px]"
                            }, i, false, {
                                fileName: "[project]/src/app/content/videos/page.tsx",
                                lineNumber: 304,
                                columnNumber: 17
                            }, void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/content/videos/page.tsx",
                        lineNumber: 302,
                        columnNumber: 13
                    }, void 0),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VideoGrid, {
                        videos: filteredVideos,
                        onSelectVideo: setSelectedVideo
                    }, void 0, false, {
                        fileName: "[project]/src/app/content/videos/page.tsx",
                        lineNumber: 309,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/content/videos/page.tsx",
                    lineNumber: 300,
                    columnNumber: 9
                }, this),
                selectedVideo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4",
                    onClick: ()=>setSelectedVideo(null),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full max-w-6xl aspect-video",
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/content/videos/page.tsx",
                                    lineNumber: 324,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/content/videos/page.tsx",
                                lineNumber: 323,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                src: `https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`,
                                title: selectedVideo.title,
                                className: "w-full h-full",
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                allowFullScreen: true,
                                onLoad: ()=>setIsLoading(false)
                            }, void 0, false, {
                                fileName: "[project]/src/app/content/videos/page.tsx",
                                lineNumber: 327,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedVideo(null),
                                className: "absolute -top-10 right-0 text-white hover:text-gray-300",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/app/content/videos/page.tsx",
                                lineNumber: 335,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/content/videos/page.tsx",
                        lineNumber: 318,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/content/videos/page.tsx",
                    lineNumber: 314,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/content/videos/page.tsx",
            lineNumber: 280,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/content/videos/page.tsx",
        lineNumber: 279,
        columnNumber: 5
    }, this);
}
_s1(VideosPage, "4ZOK8g8CN845b4Ie9D94/z8QmU4=");
_c1 = VideosPage;
var _c, _c1;
__turbopack_refresh__.register(_c, "VideoGrid");
__turbopack_refresh__.register(_c1, "VideosPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/content/videos/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_content_videos_page_tsx_c862ec._.js.map