// require
const path = require('path');



// showHomwPage
const showHomwPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
}

// showHomePageTwo
const showHomePageTwo = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/index-2.html'))
}

// showCatagoryPage
const showCatagoryPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/category.html'))
}

// showCatagoryPageThree
const showCatagoryPageThree = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/category-3col.html'))
}

//showCatagoryPageFour
const showCatagoryPageFour = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/category-4col.html'))
}

//showCatagoryPageFive
const showCatagoryPageFive = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/category-5col.html'))
}

//showCatagoryPageSix
const showCatagoryPageSix = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/category-6col.html'))
}

//showCatagoryPageSeven
const showCatagoryPageSeven = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/category-7col.html'))
}

//showCatagoryPageEight
const showCatagoryPageEight = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/category-8col.html'))
}
//showCatagoryPageBannerBoxed
const showCatagoryPageBannerBoxed = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/category-banner-boxed-image.html'))
}

//showCatagoryPageBannerFullWidth
const showCatagoryPageBannerFullWidth = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/category-banner-full-width.html'))
}

//showCatagoryPageBannerBoxedSlider
const showCatagoryPageBannerBoxedSlider = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/category-banner-boxed-slider.html'))
}

//showCatagoryPageFliexGrid
const showCatagoryPageFliexGrid = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/category-flex-grid.html'))
}

//showCatagoryPageHorizontalFilter
const showCatagoryPageHorizontalFilter = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/category-horizontal-filter1.html'))
}

//showCatagoryPageHorizontalFilterTwo
const showCatagoryPageHorizontalFilterTwo = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/category-horizontal-filter2.html'))
}

//showCatagoryPageInfiniteScroll
const showCatagoryPageInfiniteScroll = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/category-infinite-scroll.html'))
}

//showCatagoryPageList
const showCatagoryPageList = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/category-list.html'))
}

//showCatagoryPageSidebarLeft
const showCatagoryPageSidebarLeft = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/category-sidebar-left.html'))
}

//showCatagoryPageSidebarRight
const showCatagoryPageSidebarRight = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/category-sidebar-right.html'))
}

// showCheckoutReviewPage
const showCheckoutReviewPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/checkout-review.html'))
}

// showCheckoutShippingTwoPage
const showCheckoutShippingTwoPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/checkout-shipping-2.html'))
}

// showCheckoutShippingPage
const showCheckoutShippingPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/checkout-shipping.html'))
}

// showContactPage
const showContactPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/contact.html'))
}

// showDashboardPage
const showDashboardPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/dashboard.html'))
}

// showForgotPasswordPage
const showForgotPasswordPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/forgot-password.html'))
}

// showMyAccountPage
const showMyAccountPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/my-account.html'))
}

// showProductAddCartStickyPage
const showProductAddCartStickyPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/product-addcart-sticky.html'))
}

// showProducExtendedLayoutPage
const showProducExtendedLayoutPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/product-extended-layout.html'))
}

// showProductFullWidthPage
const showProductFullWidthPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/product-full-width.html'))
}

// showProductGridLayouthPage
const showProductGridLayouthPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/product-grid-layout.html'))
}

// showProductSidebarLeftPage
const showProductSidebarLeftPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/product-sidebar-left.html'))
}

// showProductSimpletPage
const showProductSimpletPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/product-simple.html'))
}

// showProductStickyBothPage
const showProductStickyBothPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/product-sticky-both.html'))
}

// showProductStickyInfoPage
const showProductStickyInfoPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/product-sticky-info.html'))
}

// showProductStickyTabPage
const showProductStickyTabPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/product-sticky-tab.html'))
}

// showProductPage
const showProductPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/product.html'))
}

// showSimplePage
const singlePage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/single.html'))
}

// showBlogPage
const showBlogPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/blog.html'))
}

// showBlogPage
const showCartPage = (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/cart.html'))
}

//export
module.exports = {
    showHomwPage,
    showHomePageTwo,
    showCatagoryPage,
    showCatagoryPageThree,
    showCatagoryPageFour,
    showCatagoryPageFive,
    showCatagoryPageSix,
    showCatagoryPageSeven,
    showCatagoryPageEight,
    showCatagoryPageBannerBoxed,
    showCatagoryPageBannerFullWidth,
    showCatagoryPageBannerBoxedSlider,
    showCatagoryPageFliexGrid,
    showCatagoryPageHorizontalFilter,
    showCatagoryPageHorizontalFilterTwo,
    showCatagoryPageInfiniteScroll,
    showCatagoryPageList,
    showCatagoryPageSidebarLeft,
    showCatagoryPageSidebarRight,
    showCheckoutReviewPage,
    showCheckoutShippingTwoPage,
    showCheckoutShippingPage,
    showContactPage,
    showDashboardPage,
    showForgotPasswordPage,
    showMyAccountPage,
    showProductAddCartStickyPage,
    showProducExtendedLayoutPage,
    showProductFullWidthPage,
    showProductGridLayouthPage,
    showProductSidebarLeftPage,
    showProductSimpletPage,
    showProductStickyBothPage,
    showProductStickyInfoPage,
    showProductStickyTabPage,
    showProductPage,
    singlePage,
    showBlogPage,
    showCartPage
}