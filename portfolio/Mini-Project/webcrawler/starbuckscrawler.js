import puppeteer from 'puppeteer'
import cheerio from 'cheerio'
import mongoose from 'mongoose'
import { MongoDB_Starbucks } from './mongodb/starbucksSchema.model.js'

async function starbucksCrawling(url) {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage()
    await page.setViewport({width: 1280, height: 720})
    await page.goto(url)
    await page.waitForSelector('body')

    
    const PP=await page.content()
    const $ = cheerio.load(PP)
    // 항목 갯수
    const genre = $('#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd > h3')
    // 음료 갯수
    const beverage=(i) => {
        const length = $(`#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(${i*2}) > ul > li`).length
        return length
    }
    // 이름 추출
    for (let i=1;i<=genre.length;i++){
        for (let j=1;j<=await beverage(i);j++){
            const name=await page.$eval(`#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(${i*2}) > ul > li:nth-child(${j}) > dl > dd`, (el)=>(el.textContent))
            const image=await page.$eval(`#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(${i*2}) > ul > li:nth-child(${j}) > dl > dt > a > img`, (el)=>(el.src))
            console.log(name, image)
            const starbucks = MongoDB_Starbucks(name, image)
            await starbucks.save()
        }
    }
    await browser.close()
    
}
await mongoose.connect('mongodb://localhost:27017/myproject') // 로컬 연결
// await mongoose.connect("mongodb://localhost:37017/myproject") // 컨테이너로 전송 시 연결
starbucksCrawling("https://www.starbucks.co.kr/menu/drink_list.do")

// #container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(${i*2}) > ul > li:nth-child(${j}) > dl > dt > a > img // 이미지

// #container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(${i*2}) > ul > li:nth-child(${j}) > dl > dd // 이름


