

Framework Vue 3 with Nuxt 3
Basics of Vue and Nuxt : Project 1
April 28, 2023

First project
What you'll learn here 

we will refresh your Vue 3 knowledge by building an app with the composition API. We will also learn about TypeScript and how Nuxt handles components.





Task 1: Creating Nuxt App

Run below command in terminal or command prompt
            npx nuxi create myproject

go to project folder cd myproject

install all dependencies npm install

run nuxt app npm run dev

application will run in browser @ localhost:3000






Task 2 : Adding Tailwind Css
run command in terminal "npm install @nuxtjs/tailwindcss --save"

add @nuxtjs/tailwindcss in side  "nuxt.config.ts"


Task 3 : Navbar creation with Tailwind CSS
in app.vue file add below code 

<template>
  <div>
    <header class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b p-4 shadow-md">
      <span class="font-mono text-3xl">My Header</span>
    </header>
  </div>
</template>



we have used Tailwind css classes:

"sticky 
top-0 
z-50 
flex 
justify-between 
items-center 
space-x-1 
border-b 
p-4 
shadow-md 
font-mono 
text-3xl"

to know more please visit

 https://tailwindcss.com/docs/position#sticky-positioning-elements


Develop homepage.html  by using Tailwind CSS
CDN : https://cdn.tailwindcss.com


 <script src="https://cdn.tailwindcss.com"></script>
 <template>
  <div
    class="shadow-md border-b p-4 text-3xl flex justify-between items-center"
  >
    <span class="font-mono text-3xl">Header</span>
  </div>
  <div
    class="mt-4 relative h-screen w-100 bg-no-repeat bg-cover bg-bottom bg-[url('./bg.jpg')]"
  >
    <div
      class="p-10 absolute w-3/2 my-20 left-40 bg-fuchsia-950 flex justify-center items-center"
    >
      <h1 class="rounded-lg p-4 bg-green-800 text-white text-3xl ">
        Find Your Option
        <input class="text-black bg-pink border-1 p-4 focus:outline-none rounded-tl-lg rounded-bl-lg" />
        <button class="bg-sky-500 text-white p-4 rounded-tr-lg rounded-br-lg">Search</button>
      </h1>
    </div>
  </div>
 </template>




some Tailwind class 

Width
w-full	width: 100%;
w-screen	width: 100vw;
w-min	width: min-content;
w-max	width: max-content;

Height

h-auto	height: auto;
h-1/2	height: 50%;
h-1/3	height: 33.333333%;
h-2/3	height: 66.666667%;
h-1/4	height: 25%;
h-2/4	height: 50%;

h-full	height: 100%;
h-screen	height: 100vh;
h-min	height: min-content;
h-max	height: max-content;

h-1	height: 0.25rem; /* 4px */

Padding 
p-0	padding: 0px;
px-0	padding-left: 0px;
padding-right: 0px;
py-0	padding-top: 0px;
padding-bottom: 0px;
p-4
padding: 1rem; /* 16px */

pt-0	padding-top: 0px;
pr-0	padding-right: 0px;
pb-0	padding-bottom: 0px;
pl-0	padding-left: 0px;






Develop listPage.html reference design below


<script src="https://cdn.tailwindcss.com"></script>
<div class="mt-40 flex justify-around">
    <div class="shadow border w-64 mr-10 z-30 h-[190px]">
      <div class="p-5 flex justify-between border-b">
        <h3 class="">Location</h3>
        <h3 class="text-blue-400 cursor-pointer capitalize">area1</h3>
      </div>
      <div class="p-5 flex justify-between border-b">
        <h3 class="">Duration</h3>
        <h3 class="text-blue-400 cursor-pointer capitalize">2 to 3 months</h3>
      </div>
      <div class="p-5 flex justify-between border-b">
        <h3 class="">Price</h3>
        <h3 class="text-blue-400 cursor-pointer capitalize"> ___$</h3>
      </div>
    </div>
    <div class="w-[800px] border">
      <div class="shadow w-full overflow-hidden mb-5 h-[200px] cursor-pointer">
        <div class="flex h-full">
          <img src="./skill1.png" alt="" class="w-[200px] h-full"/>
          <div class="p-4 flex flex-col">
            <h1 class="text-blue-400 text-4xl">HTML</h1>
            <h3 class="text-gray-700">Version 5</h3>
            <h1 class="mt-auto text-2xl">123$</h1>
          </div>
        </div>
      </div>
      <div class="shadow w-full overflow-hidden mb-5 h-[200px] cursor-pointer">
        <div class="flex h-full">
          <img src="./skill2.png" alt="" class="w-[200px] h-full"/>
          <div class="p-4 flex flex-col">
            <h1 class="text-blue-400 text-4xl">CSS</h1>
            <h3 class="text-gray-700">Version 3</h3>
            <h1 class="mt-auto text-2xl">123$</h1>
          </div>
        </div>
      </div>
      <div class="shadow w-full overflow-hidden mb-5 h-[200px] cursor-pointer">
        <div class="flex h-full">
          <img src="./skill3.png" alt="" class="w-[200px] h-full"/>
          <div class="p-4 flex flex-col">
            <h1 class="text-blue-400 text-4xl">JS</h1>
            <h3 class="text-gray-700">Version ES6</h3>
            <h1 class="mt-auto text-2xl">123$</h1>
          </div>
        </div>
      </div>
    </div>
  </div>


Develop details.html reference design below



<script src="https://cdn.tailwindcss.com"></script>
<div class="mt-10 flex flex-col ml-5">
  <img src="./skill1.png" alt="" class="w-[260px] rounded-full mx-auto" />
  <div class="flex justify-around">
    <h1 class="text-4xl">Name: HTML</h1>
    <h2 class="text-blue-600 text-4xl">Cost : 123 $</h2>
  </div>
  <div class="flex justify-around">
    <h3 class="text-gray-400 text-2xl">Version abc</h3>
    <h3 class="text-gray-400 text-2xl"></h3>
  </div>
  <p class="w-[800px] mx-auto my-5">
    The HyperText Markup Language or HTML is the standard markup language for
    documents designed to be displayed in a web browser. It is often assisted by
    technologies such as Cascading Style Sheets and scripting languages such as
    JavaScript
  </p>
</div>




convert html pages to components in Vue
components\Header.vue

<template>
  <div
    class="sticky z-10 shadow-md border-b p-4 text-3xl flex justify-between items-center"
  >
    <span class="font-mono text-3xl">Header</span>
  </div>
</template>






components\Course\SearchForm.vue

<template>
  <div
    class="mt-4 relative h-screen w-100 bg-no-repeat bg-cover bg-bottom bg-[url('./bg.jpg')]"
  >
    <div
      class="p-10 absolute w-3/2 my-20 left-40 bg-fuchsia-950 flex justify-center items-center"
    >
      <h1 class="rounded-lg p-4 bg-green-800 text-white text-3xl">
        Find Your Option
        <input
          class="text-black bg-pink border-1 p-4 focus:outline-none rounded-tl-lg rounded-bl-lg"
        />
        <button class="bg-sky-500 text-white p-4 rounded-tr-lg rounded-br-lg">
          Search
        </button>
      </h1>
    </div>
  </div>
</template>



components\Course\List.vue

<template>
    <div class="mt-10 flex justify-around">
    <div class="shadow border w-64 mr-10 z-30 h-[190px]">
      <div class="p-5 flex justify-between border-b">
        <h3 class="">Location</h3>
        <h3 class="text-blue-400 cursor-pointer capitalize">area1</h3>
      </div>
      <div class="p-5 flex justify-between border-b">
        <h3 class="">Duration</h3>
        <h3 class="text-blue-400 cursor-pointer capitalize">2 to 3 months</h3>
      </div>
      <div class="p-5 flex justify-between border-b">
        <h3 class="">Price</h3>
        <h3 class="text-blue-400 cursor-pointer capitalize"> ___$</h3>
      </div>
    </div>
    <div class="w-[800px] border">
      <div class="shadow w-full overflow-hidden mb-5 h-[200px] cursor-pointer">
        <div class="flex h-full">
          <img src="./skill1.png" alt="" class="w-[200px] h-full"/>
          <div class="p-4 flex flex-col">
            <h1 class="text-blue-400 text-4xl">HTML</h1>
            <h3 class="text-gray-700">Version 5</h3>
            <h1 class="mt-auto text-2xl">123$</h1>
          </div>
        </div>
      </div>
      <div class="shadow w-full overflow-hidden mb-5 h-[200px] cursor-pointer">
        <div class="flex h-full">
          <img src="./skill2.png" alt="" class="w-[200px] h-full"/>
          <div class="p-4 flex flex-col">
            <h1 class="text-blue-400 text-4xl">CSS</h1>
            <h3 class="text-gray-700">Version 3</h3>
            <h1 class="mt-auto text-2xl">123$</h1>
          </div>
        </div>
      </div>
      <div class="shadow w-full overflow-hidden mb-5 h-[200px] cursor-pointer">
        <div class="flex h-full">
          <img src="./skill3.png" alt="" class="w-[200px] h-full"/>
          <div class="p-4 flex flex-col">
            <h1 class="text-blue-400 text-4xl">JS</h1>
            <h3 class="text-gray-700">Version ES6</h3>
            <h1 class="mt-auto text-2xl">123$</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

components\Course\Details.vue
<template>
  <div class="mt-10 flex flex-col mx-5 w-[1000px]">
    <img src="./skill1.png" alt="" class="w-[260px] rounded-full mx-auto" />
    <div class="flex justify-around">
      <h1 class="text-4xl">Name: HTML</h1>
      <h2 class="text-blue-600 text-4xl">Cost : 123 $</h2>
    </div>
    <div class="flex justify-around">
      <h3 class="text-gray-400 text-2xl">Version abc</h3>
      <h3 class="text-gray-400 text-2xl"></h3>
    </div>
    <p class="w-[800px] mx-auto my-5">
      The HyperText Markup Language or HTML is the standard markup language for
      documents designed to be displayed in a web browser. It is often assisted
      by technologies such as Cascading Style Sheets and scripting languages
      such as JavaScript
    </p>
  </div>
</template>

Routing 
 "pages\index.vue" for "/"
    Automatically all components will import to pages folder

<template>
    <Header />
    <CourseSearchForm />
</template>






"pages\course.vue" for "http://localhost:3000/course"


<template>
    <Header />
    <CourseDetails />    
</template>





pages\listofcourse.vue for "http://localhost:3000/listofcourse"


<template>
    <Header />
    <CourseList />    
</template>

















Nuxt js Nuxt js 3 Tailwind css ui framework vue 3 Vue js

Comments

 Powered by Blogger
Theme images by Michael Elkan

My photo
K N KESAVA RAO
VISIT PROFILE
Archive
Labels
Report Abuse