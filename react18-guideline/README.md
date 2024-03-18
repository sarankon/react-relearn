
# React + Vite
React แบบ Class และ React แบบ Functional

ใช้ Vite สร้าาง Project
'''
npm create vite@latest my-todo-react -- --template react
cd my-todo-react
npm run dev
'''

# โครงสร้าง Project
index.html -> main.jsx -> app.jsx

# ESLint เตือน imageUrl รับมาไม่มีการเช็ค Type
export default function Image({ imageUrl })
'imageUrl' is missing in props validation eslint(react/prop-types)

# ติดตั้ง prop-types สำหรับเช็ค
npm install prop-types --save

import PropTypes from 'prop-types';

Image.propTypes = {
    imageUrl: PropTypes.string
}

# https://picsum.photos/

# Style
import './icon.css'
<div className='blue'>

import style from './icon.module.css'
<div className={style.red}>

Context เก็บข้อมูลไว้ตรงกลางเพื่อให้ Component ลูกใช้งานได้ ช่วยจัดการในกรณีที่มี Component ซ่อนกันหลาย ๆ ชั้น
React Hook

# ติดตั้ง Axios https://axios-http.com/docs/intro
npm install asios

# ติดตั้ง React Router https://reactrouter.com/en/main/start/tutorial
npm install react-router-dom localforage match-sorter sort-by