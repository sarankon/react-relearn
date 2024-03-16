# react-relearn

Kong Ruksiam

https://www.youtube.com/watch?v=KvNfS86KEA4&list=PLltVQYLz1BMAdESvJff1elnHXpETCmnOt&index=1 \
พัฒนาเว็บด้วย React 17 | สำหรับผู้เริ่มต้น [Phase1]

- ติดตั้ง React Developer Tools
https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

- ES2015_ES6
- React

https://www.youtube.com/watch?v=3ubQZb-99fI&list=PLltVQYLz1BMAdESvJff1elnHXpETCmnOt&index=2 \
พัฒนาเว็บด้วย React 17 | สำหรับผู้เริ่มต้น [Phase2]

---

https://www.youtube.com/watch?v=KvNfS86KEA4&list=PLltVQYLz1BMAdESvJff1elnHXpETCmnOt&index=1 \
พัฒนาเว็บด้วย React 17 | สำหรับผู้เริ่มต้น [Phase1]

- ES2015_ES6
- React
```
create project
npx create-react-app react-basic
cd react-basic
npm start 

// npm start - will call -> react-scripts start
// http://localhost:3000/
```

Structure
- :file_folder: node_module - เก็บโมดูลหรือไลบรารี่ที่ทำงานภายในโปรเจคของเรา
- :file_folder: public - เก็บไฟล์ public ต่าง ๆ เช่นรูปภาพและ index.html เป็นต้น
- :file_folder: src - สำหรับเก็บ Component หรือโครงสร้างของแอพพลิเคชั่น
- :scroll: package.json - เก็บข้อมูลต่างๆ รวมถึง package ที่จะใช้ทำงานภายในโปรเจค

:scroll: /Public/Index.html \
ไฟล์ที่ใช้สำหร้บการแสดงผลข้อมูลบนเบราเซอร์ จะรันผ่านไฟล์ index.html สิ่งที่เราสนใจใน index.html 
คือคำสั่งที่อยู่ใน <body> ตรงส่วนของ <div id="root"></div>

:scroll: /Src/App.js (App Component) \
เป็นไฟล์หลักในการรันแอพพลิเคชั่นขึ้นมา โดนนำส่วนประกอบต่าง ๆ มาประกอบกันแล้วแสดงผลในเบราเซอร์ 

:scroll: /Src/Index.js \
เป็นไฟล์สำหรับเชื่อมการทำงานระหว่าง App.js และ Index.html

# ReactDOM Render HTML
เมื่อหน้าเว็บโหลดเว็บเรียบร้อย Web Browser จะสร้าง DOM ของหน้านั้นขึ้นมา 
โดยมอง HTML เป็นโครงสร้างต้นไม้ (ก้อน Object) หรือเรียงว่า DOM (Document Object Model) 
- Tag ต่าง ๆ ใน HTML จะเรียกว่า Element

ReactDOM เป็นไลบราลี่เหมือน React ทำหน้าที่เฉพาะในการจัดการกับ DOM 
และใช้เฉพาะกับ React เท่านั้น 

<strong>คำสั่ง ReactDOM.render()</strong> จะทำการสร้าง DOM (Virtual DOM) ที่มีลักษณะของโครงสร้างต้นไม้ 
แล้วนำโครงสร้างดังกล่าวใส่ลงไปยัง DOM จริง ๆ (Real DOM) ซึ่งเป็นวิธีการ Render JSX ออกมาแสดงผลทางหน้าจอ 

ReactDOM Render HTML ยกตัวอย่างเช่น
```
ReactDOM.render(<p>Hello World</p>, document.getElementById('root'));
```

```
const data = (
    <div>
        <h1>Hello World</h1>
    </div>
);
ReactDOM.render(data, document.getElementById('root));
```

```
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <h1>Hello World</h1>
);
```

# Virtual DOM
การทำงานของ Virtual DOM \
Virtual DOM มีลักษณะคล้าย ๆ กับ DOM ใน HTML โดย Virtual DOM จะทำการคัดลอง DOM จริง (Real DOM) 
มาเก็บลง Memory ถ้ามีการเปลี่ยนแปลงเกิดขึ้นที่ Component ก็จะอัพเดตเฉพาะ Component ที่เปลี่ยนแปลงเท่านั้น
โดยไม่จำเป็นต้อง Update DOM ใหม่หมดทั้งหน้า ทำให้เกิดการทำงานได้อย่างรวจเร็ว

*** ถ้าใช้ (DOM แบบปกติจะ Refresh ทั้งหน้าเพื่อทำการอัพเดตหน้าเว็บที่เปลี่ยนแปลงไป)

# การสร้าง Component
ใน React การจะสร้างหน้าเว็บขึ้นมาได้นั้นจะใช้สิ่งที่เรียกว่า Component โดย Component คือส่วนย่อยแต่ละส่วนของหน้าเว็บที่นำมาประกอบกัน 
โดย จะเขียนด้วยภาษา JavaScript เพื่อทำหน้าตาแต่ละส่วนของเว็บหรือส่วนย่อยนั้น ๆ มาแทนที่จะเขียนใน HTML แทน

แต่ใน React จะไม่เขียน HTML ใน HTML แต่จะเขียนใน JavaScript แทนซึ่งจะใช้ส่วนที่เรียกว่า JSX (JavaScript XML)
ที่ทำให้ใส่ HTML เข้าไปใน JavaScript ได้ ดังนั้น React คือ การสร้างหน้าเว็บด้วยภาษา JavaScript ที่มี HTML แทรกอยู่ก็คือ JSX นั้นเอง

# รูปแบบการสร้าง Component
สามารถสร้างได้ 2 รูปแบบ
- Class Component
- Function Component
โดยทั้งคู่จะ Return HTML ออกมาและเขียน JSX ด้านในส่วนของการ Return

# Functional Component
สร้างแบบ Component ที่ง่ายที่สุด คือ เป็นรูปแบบฟังก์ชั่นโดยสร้างฟังก์ชั่นธรรมดา และ Return HTML ออกมา
โดย กำหนดให้ตัวอักษรตัวแรกของชื่อฟังก์ชั่นเป็นตัวพิมพ์ใหญ่เสมอ เช่น
```
function HelloComponent() {
    return(
        <h1>Hello React</h1>
    )
}

ReactDOM.render(<HelloComponent />, document.getElementById('root'))
```

# Class Component
สร้าง Class ที่ extends มาจาก React.Component และ Return HTML ออกมา
แต่ถ้าสร้างเป็นแบบ Class จะมีความสามารถในการใช้งานมากกว่าแบบ Functional
```
class HelloComponent extends React.Component {
    render() {
        return <h1>Hello React</h1>
    }
}

ReactDOM.render(<HelloComponent />, document.getElementById('root'))
```

# สร้าง Component แยกเป็นไฟล์แล้ว Import เข้ามาใช้งาน
การสร้าง Component ไว้เป็นไฟล์ด้านนอกที่มีนามสกุล .js, .jsx จากนั้นก็นำเจ้ามาทำงาน

```
function HelloComponent() {
    return (
        <h1>Hello Component</h1>
    )
}

export default HelloComponent
```

```
import HelloComponent from './HelloComponent.js'

function App() {
  return (
    <>
      <HelloComponent />
    </>
  );
}
```

# React JSX
รูปแบบการเขียน JSX
- สามารถเขียนใน &lt;div&gt; / &lt;section&gt; / &lt;article&gt; / Fragment / <> ก็ได้ และต้องมีการกำหนด Tag เปิด - ปิดทุกครัง
- การใส่ Class Style ที่เป็น Attribute ใน JSX จะมีการกำหนด className แทน class เนื่องจากคำว่า class เป็น keyword

ตัวอย่างการเขียนแบบ div /
*return มี () เพราะมี return หลายบรรทัด
```
function HelloComponent() {
    return (
        <div>
            <div>Hello World</div>
        </div>
    )
}
```

ตัวอย่างการเขียนแบบ React.Fragment
```
function HelloComponent() {
    return (
        <React.Fragment>
            <div>Hello World</div>
        </React.Fragment>
    )
}
```

ตัวอย่างการเขียนแบบ Fragment &lt;&gt;&lt;/&gt;
```
function HelloComponent() {
    return (
        <>
            <div>Hello World</div>
        </>
    )
}
```

# JSX Dynamic Data
ทำการสร้างตัวแปลแล้ว เรียกใช้ข้อมูลผ่าน { }
```
function Customer() {
  const name = 'Customer A'
  const address = 'Address A'

  return (
      <>
          <div>Name: {name}</div>
          <div>Address: {address}</div>
      </>
  )
}

function App() {
  return (
    <>
      <Customer />
    </>
  );
}

export default App;
```

# JSX Style & ClassName
การเขียนแบบ inline ใช้ style={{properties:value, ...}} \
ตัวอย่าง color, textAlign, fontSize
```
function Customer() {
  const name = 'Customer A'
  const address = 'Address A'
  
  const design = {color: 'blue', textAlign: 'right'}
  return (
      <>
          <div style={{color:'red', textAlign:'center'}}>Name: {name}</div>
          <div style={design}>Address: {address}</div>
      </>
  )
}
```

สร้างไฟล์ CSS แล้ว import มาใช้งาน \
Item.css
```
.item {
    color: blue
}
```

```
function Customer() {
  const name = 'Customer A'
  const address = 'Address A'

  const design = {color: 'blue', textAlign: 'right'}
  return (
      <>
          <div className='item'>Name: {name}</div>
          <div>Address: {address}</div>
      </>
  )
}
```


# React Prop
Props (Properties) คือ ตัวแปรที่สามารถส่งเข้าไปใน Components ได้ผ่านการกำหนด Attribute
ส่งผลให้ Component แต่ละตัวสามารถรับค่าจากด้านนอกเข้าไปทำงานได้

&lt;ComponentName PropertiesName=PropertiesValue /&gt;

```
function Customer(props) {
  return (
      <>
          <div className='item'>Name: {props.name}</div>
          <div>Address: {props.address}</div>
      </>
  )
}

function App() {
  return (
    <>
      <Customer 
        name='Customer Name (props)' 
        address='Customer Address (props)'/>
    </>
  );
}
```

# Props Destructuring
```
function Customer({name, address}) {
  return (
      <>
          <div className='item'>Name: {name}</div>
          <div>Address: {address}</div>
      </>
  )
}

function App() {
  return (
    <>
      <Customer 
        name='Customer Name (props)' 
        address='Customer Address (props)'/>
    </>
  );
}
```

# Props and ArrayMap with Key
Keys เป็น Properties ที่อยู่ใน JSX โดย Keys จะมีค่าไม่ซ้ำกัน
กำหนดขึ้นเพื่อให้ React นำไปเช็คว่ามี Component ใดบ้างที่เปลี่ยนแปลงค่าไปในการ Render หน้าเว็บ
```
function Customer({name, address}) {
  return (
      <>
          <div className='item'>Name: {name}</div>
          <div>Address: {address}</div>
      </>
  )
}

function App() {
  const data = [
    {name: 'Name 1', address: 'Address 1'},
    {name: 'Name 2', address: 'Address 2'},
    {name: 'Name 3', address: 'Address 3'},
  ]
  return (
    <>
      {
        data.map((element, index) => <Customer key={index} name={element.name} address={element.address} />)
      }
      {
        // element name are same in component props name
        data.map((element, index) => <Customer key={index} {...element} />)
      }
    </>
  );
}
```

แบบที่ในข้อมูลมี key อยู่ด้วย
```
function App() {
  const data = [
    {key: 1, name: 'Name 1', address: 'Address 1'},
    {key: 2, name: 'Name 2', address: 'Address 2'},
    {key: 3, name: 'Name 3', address: 'Address 3'},
  ]
  return (
    <>
      {
        data.map((element) => <Customer {...element} />)
      }
    </>
  );
}
```

# Key Props UUID
เราจะใช้ Library UUID (Universally Unique Identifier) สำหรับสร้าง Key ให้ไม่ซ้ำกัน \
https://www.npmjs.com/package/uuid

```
npm install uuid
```

```
import { v4 as uuidv4 } from 'uuid'

function Customer({name, address}) {
  return (
      <>
          <div className='item'>Name: {name}</div>
          <div>Address: {address}</div>
      </>
  )
}

function App() {
  const data = [
    {name: 'Name 1', address: 'Address 1'},
    {name: 'Name 2', address: 'Address 2'},
    {name: 'Name 3', address: 'Address 3'},
  ]
  return (
    <>
      {
        data.map((element) => <Customer key={uuidv4()} {...element} />)
      }
    </>
  );
}
```

# React PropsType (Validation)
https://www.npmjs.com/package/prop-types \
เป็นการประกาศรูปแบบหรือชนิดของ Props ที่ส่งเข้าไปทำงานใน Component 
เช่น กำหนดชนิดข้อมูลของ Props หรือ บังคับให้ต้องกำหนดค่า Props ทุกครั้งที่มีการเรียกใช้งาน Component

```
npm install prop-types
```

ComponentName.propTypes = { properties: PropType.type, ...}

กำหนด Type และ Required
```
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'

function Customer({name, address}) {
  return (
      <>
          <div className='item'>Name: {name}</div>
          <div>Address: {address}</div>
      </>
  )
}

Customer.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.number
}

function App() {
  const data = [
    {address: 'Address 1'},
    {name: 'Name 2', address: 'Address 2'},
    {name: 'Name 3', address: 'Address 3'},
  ]
  return (
    <>
      {
        data.map((element) => <Customer key={uuidv4()} {...element} />)
      }
    </>
  );
}
```

