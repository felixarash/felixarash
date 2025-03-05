(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_07a003._.js", {

"[project]/src/app/components/shared/PhotoGallery.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PhotoGallery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
const categories = [
    'All',
    'Me',
    'Sea',
    'Friends',
    'Events',
    'Nature',
    'Tech',
    'Cats',
    'Food',
    'Explore',
    'Meme'
];
const photos = [
    {
        id: 1,
        src: '/content/photos/photo1.webp',
        alt: 'Sea Waves',
        width: 1920,
        height: 1080,
        category: 'Sea'
    },
    {
        id: 2,
        src: '/content/photos/photo2.webp',
        alt: 'Cirrocumulus Clouds',
        width: 1600,
        height: 1067,
        category: 'Nature'
    },
    {
        id: 3,
        src: '/content/photos/photo3.webp',
        alt: 'OMW to Hawksbay',
        width: 1800,
        height: 1200,
        category: 'Explore'
    },
    {
        id: 4,
        src: '/content/photos/photo4.webp',
        alt: 'Somewhere in KDA Scheme',
        width: 1500,
        height: 1000,
        category: 'Explore'
    },
    {
        id: 5,
        src: '/content/photos/photo5.webp',
        alt: 'Hawksbay Beach',
        width: 2000,
        height: 1333,
        category: 'Sea'
    },
    {
        id: 6,
        src: '/content/photos/photo6.webp',
        alt: 'Hawksbay Beach',
        width: 1600,
        height: 1067,
        category: 'Sea'
    },
    {
        id: 7,
        src: '/content/photos/photo7.webp',
        alt: 'Hawksbay Beach',
        width: 1920,
        height: 1280,
        category: 'Sea'
    },
    {
        id: 8,
        src: '/content/photos/photo8.webp',
        alt: 'Hot day at Hill Park',
        width: 1800,
        height: 1200,
        category: 'Explore'
    },
    {
        id: 9,
        src: '/content/photos/photo9.webp',
        alt: 'Hill Park at Night',
        width: 1600,
        height: 1067,
        category: 'Explore'
    },
    {
        id: 10,
        src: '/content/photos/photo10.webp',
        alt: 'Green Lake at Hill Park',
        width: 2000,
        height: 1333,
        category: 'Explore'
    },
    {
        id: 11,
        src: '/content/photos/photo11.webp',
        alt: 'A small river at Clifton Beach',
        width: 1920,
        height: 1280,
        category: 'Explore'
    },
    {
        id: 12,
        src: '/content/photos/photo12.webp',
        alt: 'My first calligraphy painting',
        width: 1500,
        height: 1000,
        category: 'Me'
    },
    {
        id: 13,
        src: '/content/photos/photo13.webp',
        alt: 'Ai generated me',
        width: 1600,
        height: 1067,
        category: 'Me'
    },
    {
        id: 14,
        src: '/content/photos/photo14.webp',
        alt: 'Self Portrait',
        width: 1800,
        height: 1200,
        category: 'Me'
    },
    {
        id: 15,
        src: '/content/photos/photo15.webp',
        alt: 'Laying myself on rocks near clifton beach',
        width: 2000,
        height: 1333,
        category: 'Sea'
    }
];
// Update the aspect ratio function
const aspectRatioClass = (width, height)=>{
    const ratio = width / height;
    if (ratio < 0.75) {
        return "aspect-[3/4] md:row-span-2 md:col-span-1 h-auto"; // Portrait - spans 2 rows
    } else if (ratio < 0.75) {
        return "aspect-[3/4] row-span-2 md:col-span-1"; // Portrait - spans 2 rows, 1 column
    }
    return "aspect-[4/3] md:row-span-1"; // Standard
};
function PhotoGallery() {
    _s();
    const [currentCategory, setCurrentCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [isHeaderVisible, setIsHeaderVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedPhoto, setSelectedPhoto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const filteredPhotos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PhotoGallery.useMemo[filteredPhotos]": ()=>currentCategory === 'All' ? photos : photos.filter({
                "PhotoGallery.useMemo[filteredPhotos]": (photo)=>photo.category === currentCategory
            }["PhotoGallery.useMemo[filteredPhotos]"])
    }["PhotoGallery.useMemo[filteredPhotos]"], [
        currentCategory
    ]);
    // Handle scroll behavior
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhotoGallery.useEffect": ()=>{
            const handleScroll = {
                "PhotoGallery.useEffect.handleScroll": ()=>{
                    const currentScrollY = window.scrollY;
                    if (currentScrollY > 100) {
                        setIsHeaderVisible(false);
                    } else {
                        setIsHeaderVisible(true);
                    }
                }
            }["PhotoGallery.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "PhotoGallery.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["PhotoGallery.useEffect"];
        }
    }["PhotoGallery.useEffect"], []);
    // Handle keyboard navigation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhotoGallery.useEffect": ()=>{
            const handleKeyDown = {
                "PhotoGallery.useEffect.handleKeyDown": (e)=>{
                    if (!selectedPhoto) return;
                    const currentIndex = filteredPhotos.findIndex({
                        "PhotoGallery.useEffect.handleKeyDown.currentIndex": (p)=>p.id === selectedPhoto.id
                    }["PhotoGallery.useEffect.handleKeyDown.currentIndex"]);
                    switch(e.key){
                        case 'ArrowLeft':
                            if (currentIndex > 0) {
                                setSelectedPhoto(filteredPhotos[currentIndex - 1]);
                            }
                            break;
                        case 'ArrowRight':
                            if (currentIndex < filteredPhotos.length - 1) {
                                setSelectedPhoto(filteredPhotos[currentIndex + 1]);
                            }
                            break;
                        case 'Escape':
                            setSelectedPhoto(null);
                            break;
                    }
                }
            }["PhotoGallery.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "PhotoGallery.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["PhotoGallery.useEffect"];
        }
    }["PhotoGallery.useEffect"], [
        selectedPhoto,
        filteredPhotos
    ]);
    // Handle body scroll lock
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhotoGallery.useEffect": ()=>{
            if (selectedPhoto) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
            return ({
                "PhotoGallery.useEffect": ()=>{
                    document.body.style.overflow = 'auto';
                }
            })["PhotoGallery.useEffect"];
        }
    }["PhotoGallery.useEffect"], [
        selectedPhoto
    ]);
    // Add touch gesture handling
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhotoGallery.useEffect": ()=>{
            let touchStartX = 0;
            const handleTouchStart = {
                "PhotoGallery.useEffect.handleTouchStart": (e)=>{
                    touchStartX = e.touches[0].clientX;
                }
            }["PhotoGallery.useEffect.handleTouchStart"];
            const handleTouchEnd = {
                "PhotoGallery.useEffect.handleTouchEnd": (e)=>{
                    if (!selectedPhoto) return;
                    const touchEndX = e.changedTouches[0].clientX;
                    const diffX = touchEndX - touchStartX;
                    // Swipe threshold of 50px
                    if (Math.abs(diffX) > 50) {
                        if (diffX > 0) {
                            navigate('prev');
                        } else {
                            navigate('next');
                        }
                    }
                }
            }["PhotoGallery.useEffect.handleTouchEnd"];
            window.addEventListener('touchstart', handleTouchStart);
            window.addEventListener('touchend', handleTouchEnd);
            return ({
                "PhotoGallery.useEffect": ()=>{
                    window.removeEventListener('touchstart', handleTouchStart);
                    window.removeEventListener('touchend', handleTouchEnd);
                }
            })["PhotoGallery.useEffect"];
        }
    }["PhotoGallery.useEffect"], [
        selectedPhoto
    ]);
    const navigate = (direction)=>{
        if (!selectedPhoto) return;
        const currentIndex = filteredPhotos.findIndex((p)=>p.id === selectedPhoto.id);
        if (direction === 'prev' && currentIndex > 0) {
            setSelectedPhoto(filteredPhotos[currentIndex - 1]);
        } else if (direction === 'next' && currentIndex < filteredPhotos.length - 1) {
            setSelectedPhoto(filteredPhotos[currentIndex + 1]);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
        sticky ${isHeaderVisible ? 'top-16' : 'top-0'} 
        z-20 -mx-4 px-4 py-4 
        bg-white/95 backdrop-blur-lg shadow-sm
        transition-all duration-300
      `,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-nowrap gap-3 overflow-x-auto pb-2 scrollbar-hide",
                    children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setCurrentCategory(category),
                            className: `
                px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap
                ${currentCategory === category ? 'bg-gray-900 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}
              `,
                            children: category
                        }, category, false, {
                            fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                            lineNumber: 287,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                    lineNumber: 285,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4    auto-rows-[minmax(200px,_1fr)] grid-flow-dense    gap-2 sm:gap-3 md:gap-4 mt-6",
                children: filteredPhotos.map((photo, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setSelectedPhoto(photo),
                        className: `
              relative cursor-pointer group overflow-hidden rounded-lg bg-gray-100 
              shadow-sm hover:shadow-md transition-all duration-300
              ${aspectRatioClass(photo.width, photo.height)}
            `,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: photo.src,
                                alt: photo.alt,
                                fill: true,
                                sizes: `(max-width: 480px) 100vw, (max-width: 640px) 50vw, (max-width: 768px) ${photo.width / photo.height < 0.75 ? '100vw' : '33vw'}, (max-width: 1024px) ${photo.width / photo.height < 0.75 ? '50vw' : '25vw'}, ${photo.width / photo.height < 0.75 ? '33vw' : '20vw'}`,
                                className: "object-cover transition-transform duration-300 group-hover:scale-105",
                                loading: index < 8 ? "eager" : "lazy",
                                priority: index < 8,
                                quality: 100,
                                placeholder: "blur",
                                blurDataURL: `data:image/svg+xml;base64,${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${photo.width} ${photo.height}">
                  <rect width="100%" height="100%" fill="#F3F4F6"/>
                </svg>`).toString('base64')}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                                lineNumber: 320,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-medium",
                                            children: photo.alt
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                                            lineNumber: 338,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs opacity-75",
                                            children: photo.category
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                                            lineNumber: 339,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                                    lineNumber: 337,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                                lineNumber: 336,
                                columnNumber: 13
                            }, this)
                        ]
                    }, photo.id, true, {
                        fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                        lineNumber: 311,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                lineNumber: 305,
                columnNumber: 7
            }, this),
            selectedPhoto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-full flex items-center justify-center p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelectedPhoto(null),
                            className: "absolute top-4 right-4 z-50 text-white hover:text-gray-300 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTimes"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                                lineNumber: 355,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                            lineNumber: 351,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>navigate('prev'),
                            className: "absolute left-4 text-white hover:text-gray-300 transition-colors   bg-black/50 rounded-full p-3 backdrop-blur-sm   md:bg-transparent md:p-0",
                            disabled: filteredPhotos.indexOf(selectedPhoto) === 0,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronLeft"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                                lineNumber: 366,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                            lineNumber: 359,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>navigate('next'),
                            className: "absolute right-4 text-white hover:text-gray-300 transition-colors   bg-black/50 rounded-full p-3 backdrop-blur-sm   md:bg-transparent md:p-0",
                            disabled: filteredPhotos.indexOf(selectedPhoto) === filteredPhotos.length - 1,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronRight"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                                lineNumber: 376,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                            lineNumber: 369,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative max-w-[90vw] max-h-[90vh]",
                            children: [
                                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                                        lineNumber: 383,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                                    lineNumber: 382,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: selectedPhoto.src,
                                    alt: selectedPhoto.alt,
                                    width: selectedPhoto.width,
                                    height: selectedPhoto.height,
                                    className: "object-contain max-h-[90vh]",
                                    onLoadingComplete: ()=>setIsLoading(false),
                                    quality: 100
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                                    lineNumber: 386,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-white text-lg font-medium",
                                            children: selectedPhoto.alt
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                                            lineNumber: 396,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/75 text-sm",
                                            children: selectedPhoto.category
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                                            lineNumber: 397,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                                    lineNumber: 395,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                            lineNumber: 380,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                    lineNumber: 349,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                lineNumber: 348,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(PhotoGallery, "Bx/2Witm5Kzl2KG2ciJh18h/Zvo=");
_c = PhotoGallery;
var _c;
__turbopack_refresh__.register(_c, "PhotoGallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/content/photos/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_07a003._.js.map