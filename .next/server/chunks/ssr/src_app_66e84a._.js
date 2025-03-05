module.exports = {

"[project]/src/app/components/shared/PhotoGallery.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PhotoGallery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$photoswipe$2f$dist$2f$photoswipe$2d$lightbox$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/photoswipe/dist/photoswipe-lightbox.esm.js [app-ssr] (ecmascript)");
'use client';
;
;
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
        alt: 'My Workspace Setup',
        width: 1920,
        height: 1080,
        category: 'Tech'
    },
    {
        id: 2,
        src: '/content/photos/photo2.webp',
        alt: 'Sunset at Beach',
        width: 1600,
        height: 1067,
        category: 'Sea'
    },
    {
        id: 3,
        src: '/content/photos/photo3.webp',
        alt: 'Cozy Coffee Shop',
        width: 1800,
        height: 1200,
        category: 'Explore'
    },
    {
        id: 4,
        src: '/content/photos/photo4.webp',
        alt: 'My Cat Luna',
        width: 1500,
        height: 1000,
        category: 'Cats'
    },
    {
        id: 5,
        src: '/content/photos/photo5.webp',
        alt: 'Birthday Celebration',
        width: 2000,
        height: 1333,
        category: 'Events'
    },
    {
        id: 6,
        src: '/content/photos/photo6.webp',
        alt: 'Homemade Pasta',
        width: 1600,
        height: 1067,
        category: 'Food'
    },
    {
        id: 7,
        src: '/content/photos/photo7.webp',
        alt: 'Mountain Hiking',
        width: 1920,
        height: 1280,
        category: 'Nature'
    },
    {
        id: 8,
        src: '/content/photos/photo8.webp',
        alt: 'Friends Gathering',
        width: 1800,
        height: 1200,
        category: 'Friends'
    },
    {
        id: 9,
        src: '/content/photos/photo9.webp',
        alt: 'Coding Session',
        width: 1600,
        height: 1067,
        category: 'Tech'
    },
    {
        id: 10,
        src: '/content/photos/photo10.webp',
        alt: 'Beach Day',
        width: 2000,
        height: 1333,
        category: 'Sea'
    },
    {
        id: 11,
        src: '/content/photos/photo11.webp',
        alt: 'City Exploration',
        width: 1920,
        height: 1280,
        category: 'Explore'
    },
    {
        id: 12,
        src: '/content/photos/photo12.webp',
        alt: 'Cat Nap',
        width: 1500,
        height: 1000,
        category: 'Cats'
    },
    {
        id: 13,
        src: '/content/photos/photo13.webp',
        alt: 'Funny Moment',
        width: 1600,
        height: 1067,
        category: 'Meme'
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
        alt: 'Food Festival',
        width: 2000,
        height: 1333,
        category: 'Food'
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
    const [currentCategory, setCurrentCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('All');
    const [isHeaderVisible, setIsHeaderVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadedImages, setLoadedImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const filteredPhotos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>currentCategory === 'All' ? photos : photos.filter((photo)=>photo.category === currentCategory), [
        currentCategory
    ]);
    // Update the PhotoSwipe initialization with better responsive settings
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const lightbox = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$photoswipe$2f$dist$2f$photoswipe$2d$lightbox$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
            gallery: '#photo-gallery',
            children: 'a',
            pswpModule: ()=>__turbopack_require__("[project]/node_modules/photoswipe/dist/photoswipe.esm.js [app-ssr] (ecmascript, async loader)")(__turbopack_import__),
            padding: {
                top: 20,
                bottom: 20,
                left: 20,
                right: 20
            },
            bgOpacity: 0.9,
            showHideAnimationType: 'fade',
            imageClickAction: 'zoom',
            tapAction: 'zoom',
            preloadFirstSlide: true,
            preload: [
                2,
                4
            ],
            wheelToZoom: true,
            closeOnVerticalDrag: false,
            initialZoomLevel: 'fit',
            secondaryZoomLevel: 1.5,
            maxZoomLevel: 3,
            imageLoadingIndicatorEnabled: true,
            // Enhanced responsive viewport handling
            getViewportSizeFn: (options, pswp)=>{
                const width = window.innerWidth;
                const height = window.innerHeight;
                const paddingX = (options.padding?.left || 0) + (options.padding?.right || 0);
                const paddingY = (options.padding?.top || 0) + (options.padding?.bottom || 0);
                if (pswp.currSlide?.width && pswp.currSlide?.height) {
                    const imageRatio = pswp.currSlide.width / pswp.currSlide.height;
                    const viewportRatio = width / height;
                    if (imageRatio < 0.75) {
                        if (viewportRatio > imageRatio) {
                            // Viewport is wider than image ratio
                            const targetHeight = height - paddingY;
                            const targetWidth = targetHeight * imageRatio;
                            return {
                                x: Math.min(width - paddingX, targetWidth),
                                y: targetHeight
                            };
                        }
                    }
                }
                return {
                    x: width - paddingX,
                    y: height - paddingY
                };
            }
        });
        // Improved responsive handling on image change
        lightbox.on('change', ()=>{
            if (lightbox.pswp?.currSlide) {
                const slide = lightbox.pswp.currSlide;
                const ratio = slide.width / slide.height;
                const viewportRatio = window.innerWidth / window.innerHeight;
                // Adjust zoom and position based on image orientation
                if (ratio < 0.75) {
                    if (viewportRatio > ratio) {
                        const scale = Math.min(1, window.innerHeight / slide.height);
                        slide.zoomTo(scale, {
                            x: slide.width / 2,
                            y: slide.height / 2
                        }, 0, false);
                    }
                } else {
                    const scale = Math.min(1, Math.min(window.innerWidth / slide.width, window.innerHeight / slide.height));
                    slide.zoomTo(scale, {
                        x: slide.width / 2,
                        y: slide.height / 2
                    }, 0, false);
                }
            }
        });
        // Handle resize events
        lightbox.on('resize', ()=>{
            if (lightbox.pswp?.currSlide) {
                lightbox.pswp.currSlide.updateContentSize(true);
            }
        });
        // Cleanup and event handlers
        lightbox.on('openingAnimationStart', ()=>{
            document.body.style.overflow = 'hidden';
        });
        lightbox.on('close', ()=>{
            document.body.style.overflow = 'auto';
        });
        lightbox.init();
        return ()=>{
            lightbox.destroy();
        };
    }, []);
    // Keep scroll handler
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            const currentScrollY = window.scrollY;
            if (currentScrollY > 100) {
                setIsHeaderVisible(false);
            } else {
                setIsHeaderVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    // Modified preload function
    const preloadImage = async (src)=>{
        if (!loadedImages.has(src)) {
            try {
                const img = document.createElement('img');
                await new Promise((resolve, reject)=>{
                    img.onload = resolve;
                    img.onerror = reject;
                    img.src = src;
                });
                setLoadedImages((prev)=>new Set([
                        ...prev,
                        src
                    ]));
            } catch (err) {
                console.error('Failed to preload image:', src, err);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
        sticky ${isHeaderVisible ? 'top-16' : 'top-0'} 
        z-20 -mx-4 px-4 py-4 
        bg-white/95 backdrop-blur-lg shadow-sm
        transition-all duration-300
      `,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-nowrap gap-3 overflow-x-auto pb-2 scrollbar-hide",
                    children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setCurrentCategory(category),
                            className: `
                px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap
                ${currentCategory === category ? 'bg-gray-900 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}
              `,
                            children: category
                        }, category, false, {
                            fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                            lineNumber: 324,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                    lineNumber: 322,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                lineNumber: 316,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "photo-gallery",
                className: "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4    auto-rows-[minmax(200px,_1fr)] grid-flow-dense    gap-2 sm:gap-3 md:gap-4 mt-6",
                children: filteredPhotos.map((photo, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: photo.src,
                        "data-pswp-width": photo.width,
                        "data-pswp-height": photo.height,
                        className: `
              relative cursor-pointer group overflow-hidden rounded-lg bg-gray-100 
              shadow-sm hover:shadow-md transition-all duration-300
              ${aspectRatioClass(photo.width, photo.height)}
            `,
                        target: "_blank",
                        rel: "noreferrer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: photo.src,
                                alt: photo.alt,
                                fill: true,
                                sizes: `
                (max-width: 480px) 100vw,
                (max-width: 640px) 50vw,
                (max-width: 768px) ${photo.width / photo.height < 0.75 ? '100vw' : '33vw'},
                (max-width: 1024px) ${photo.width / photo.height < 0.75 ? '50vw' : '25vw'},
                ${photo.width / photo.height < 0.75 ? '33vw' : '20vw'}
              `,
                                className: "object-cover transition-transform duration-300 group-hover:scale-105",
                                loading: index < 8 ? "eager" : "lazy",
                                priority: index < 8,
                                quality: 100,
                                placeholder: "blur",
                                blurDataURL: `data:image/svg+xml;base64,${Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${photo.width} ${photo.height}">
                  <rect width="100%" height="100%" fill="#F3F4F6"/>
                </svg>`).toString('base64')}`,
                                onLoadingComplete: ()=>preloadImage(photo.src)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                                lineNumber: 362,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-medium",
                                            children: photo.alt
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                                            lineNumber: 387,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs opacity-75",
                                            children: photo.category
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                                            lineNumber: 388,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                                    lineNumber: 386,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                                lineNumber: 385,
                                columnNumber: 13
                            }, this)
                        ]
                    }, photo.id, true, {
                        fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                        lineNumber: 349,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/shared/PhotoGallery.tsx",
                lineNumber: 342,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/app/content/photos/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=src_app_66e84a._.js.map