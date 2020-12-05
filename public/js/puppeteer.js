const puppeteer = require("puppeteer");
//Web Scrapping
(async () => {

    const browser = await puppeteer.launch();
    console.log('browser okay');

    const page = await browser.newPage();
    console.log('page okay');

    await page.goto('http://localhost:3000/')
    console.log('site web okay');

    await page.setViewport({
        width: 1920,
        height: 937
    })
    
    await page.screenshot({
        path: 'public/img/inbox.png',
        fullPage: true
    })
    console.log('screen okay');

    // await page.pdf({
    //     path: 'page.pdf',
    //     format: 'A4'
    // })

})().catch(err => {
    console.log(err.message);
})