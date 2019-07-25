const express = require('express');
const router = express.Router();
const puppeteer = require('puppeteer');

// Fetch all the post
router.get('/capture', async (req, res)=>{
    let browser = await puppeteer.launch({ headless: false });
    let page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto('https://www.twitter.com');
    await page.screenshot({ path: './image.png', fullPage: true });
    res.send('Screenshot Captured!');
});

module.exports = router;