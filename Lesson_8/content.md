Nội dung buổi học: Ôn tập kiến thức

1. Cấu trúc một dự án web tương đối chuẩn

2. Link font, link icon

- font: google font
- icon: font awesome, boxicons

3. Javascript

- Tác dụng: Tương tác, xử lí, ...

- Biến: Variables

  - Biến dùng để lưu trữ dữ liệu
  - 3 cách khai báo biến
    -> var (ít dùng)
    -> let
    -> const
  - Ví dụ

  ```javascript
  var a = 5;
  let b = 6;
  const c = 7;

  const element = document.getElementById('element-id'); // Ít dùng
  const element = document.querySelector('element-css-selector'); // Thường dùng

  const h1 = document.querySelector('.heading1');
  const image = document.querySelector('.box .content .content-img');
  ```

- Toán tử: Operators: + - \* / % \*\*

  - Ví dụ:

  ```javascript
  let a = 10;
  let b = 100;
  let c = (a + b)(a / b + 1); // Kết hợp toán tử
  ```

- Phép gán: Assignment: `let b = 10`

- Kiểu dữ liệu: Data type

* String (chuỗi)
* Number (số)
* Boolean
* Array
* Object
* Undefind (không xác định / chưa được định nghĩa)
* Null (không là cái gì cả). Lưu ý, null != ''

- Hàm: Function: Dùng để làm một cái công việc gì đó

```javascript
function FuncName() {
  // Cách 1
  // Code here
}

const FuncName = function () {
  // Cách 2
  // Code here
};

const FuncName = () => {
  // Cách 3
  // Code here
};
```

- Kiểu dữ liệu mảng - Array: Thường được sử dụng để lưu trữ nhiều dữ liệu cùng kiểu
  Các phương thức làm việc với mảng

* length: độ dài mảng
* push: Thêm phần tử vào cuối mảng
* pop: Xóa phần tử cuối mảng
* shift: Thêm phần tử vào đầu mảng
* unshift: Xóa phần tử đầu mảng

```javascript
const names = ['dat', 'huy', 'quyen', 'viet anh', 'nhan'];
const numbers = [1, 2, 3, 4];

console.log(names.length); // 5
names.push('gia binh');
names.pop();
```

- Object: Đối tượng

```javascript
const friend = {
  // Thuộc tính - Properties (tính chất)
  name: 'John',
  age: 96,
  address: '505 Minh Khai',

  // Phương thức - Method (hành động)
  rizz: function () {
    console.log('Chao em, em an com chua!');
  },
};

console.log(friend.address); // 505 Minh Khai
friend.rizz;
```

- Câu lệnh điều kiện

```javascript
let a = 10;
let b = 20;

if (a > b) {
  console.log('a > b');
} else if (a < b) {
  console.log('a > b');
} else {
  console.log('a = b');
}
```

- Cấu trúc switch

```javascript
let weather_info = 'rain'

switch (weather_info) {
    case 'rain':
        console.log("It is raining")
        break
    case 'clear':
        console.log("It is clear")
        break
    case 'snow'
        console.log("It is snowing")
        break
    default:
        console.log("Missing data")
}
```

- Vòng lặp For

```javascript
const myNums = [10, 100, 20, -77, 14];
//    index      0   1    2    3   4
for (let i = 0; i < myNums.length; i++) {
  console.log(myNums[i]);
}
```

Bonus: Luyện tập thật nhiều
