import{test, expect} from '@playwright/test'

//file level hooks

test.beforeAll(async()=>{

console.log('file beforeall')
})

test.beforeEach(async()=>{

console.log('file beforeeach')
})

test.afterEach(async()=>{

console.log('file aftereach')
})

test.afterAll(async()=>{

console.log('file afterall')
})


test.describe('Login Test',()=>{     //group1

//group lavel hooks

test.beforeAll(async()=>{

    console.log('group1 beforeall')

})

test.beforeEach(async()=>{

    console.log('group1 beforeeach')
})

test.afterEach(async()=>{

    console.log ('group1 aftereach')
})

test.afterAll(async()=>{
    console.log('group1 afterall')
})
    

test('Valid login',async({page})=>{

    console.log('valid login completed')
})

test('invalid login',async({page})=>{

    console.log('invalid login completed')
})
})

test.describe('Test product',()=>{        //group2 

//group lavel hooks

test.beforeAll(async()=>{

    console.log('group2 beforeall')

})

test.beforeEach(async()=>{

    console.log('group2 beforeeach')
})

test.afterEach(async()=>{

    console.log ('group2 aftereach')
})

test.afterAll(async()=>{
    console.log('group2 afterall')
})


test('login page',async({page})=>{

console.log('login page completed')

})

test('add product',async({page})=>{

    console.log('product added')
})
})