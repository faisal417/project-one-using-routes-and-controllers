
// require
const express = require('express');
const {
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
    } = require('../controllers/pageControllers')


// init route
const route = express.Router();

//routing
route.get('/', showHomwPage);
route.get('/index-2', showHomePageTwo)
route.get('/category', showCatagoryPage)
route.get('/category-3col', showCatagoryPageThree)
route.get('/category-4col', showCatagoryPageFour)
route.get('/category-5col', showCatagoryPageFive)
route.get('/category-6col', showCatagoryPageSix)
route.get('/category-7col', showCatagoryPageSeven)
route.get('/category-8col', showCatagoryPageEight)
route.get('/category-banner-boxed-image', showCatagoryPageBannerBoxed)
route.get('/category-banner-boxed-slider', showCatagoryPageBannerBoxedSlider)
route.get('/category-flex-grid', showCatagoryPageFliexGrid)
route.get('/category-horizontal-filter1', showCatagoryPageHorizontalFilter)
route.get('/category-horizontal-filter2', showCatagoryPageHorizontalFilterTwo)
route.get('/category-infinite-scroll', showCatagoryPageInfiniteScroll)
route.get('/category-list', showCatagoryPageList)
route.get('/category-sidebar-left', showCatagoryPageSidebarLeft)
route.get('/category-sidebar-right', showCatagoryPageSidebarRight)
route.get('/checkout-review', showCheckoutReviewPage)
route.get('/checkout-shipping', showCheckoutShippingPage)
route.get('/checkout-shipping-2', showCheckoutShippingTwoPage)
route.get('/contact', showContactPage)
route.get('/dashboard', showDashboardPage)
route.get('/forgot-password', showForgotPasswordPage)
route.get('/my-account', showMyAccountPage)
route.get('/product-addcart-sticky', showProductAddCartStickyPage)
route.get('/product-extended-layout', showProducExtendedLayoutPage)
route.get('/product-full-width', showProductFullWidthPage)
route.get('/product-grid-layout', showProductGridLayouthPage)
route.get('/product-sidebar-left', showProductSidebarLeftPage)
route.get('/product-simple', showProductSimpletPage)
route.get('/product-sticky-both', showProductStickyBothPage)
route.get('/product-sticky-info', showProductStickyInfoPage)
route.get('/product-sticky-tab', showProductStickyTabPage)
route.get('/product', showProductPage)
route.get('/single', singlePage)
route.get('/blog', showBlogPage)
route.get('/cart', showCartPage)
route.get('/category-banner-full-width', showCatagoryPageBannerFullWidth)

//export
module.exports = route;