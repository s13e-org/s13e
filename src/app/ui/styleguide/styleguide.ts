import { Component } from '@angular/core';
import { Button } from '../atoms/button/button';
import { Icon } from '../atoms/icon/icon';
import { Navbar } from '../organisms/navbar/navbar';
import { SearchBox } from '../molecules/search-box/search-box';
import { PropDoc, StyleguideCard } from './styleguide-card/styleguide-card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-styleguide',
  imports: [
    CommonModule, 
    FormsModule,
    Button, 
    SearchBox, 
    StyleguideCard,
    Icon
  ],
  standalone: true,
  templateUrl: './styleguide.html',
  styleUrl: './styleguide.css'
})
export class Styleguide {

  public onSave(): void {
    alert("on click!!!");
  }

  iconProps: PropDoc[] = [
    {name: 'src', type: 'string', default: '', description: 'URL của hình ảnh icon. Sử dụng khi muốn hiển thị icon dưới dạng <img>.'},
    {name: 'svg', type: 'string', default: '', description: 'Chuỗi SVG raw. Hiển thị inline SVG. Nếu `trustSvg=true`, bypass sanitize.'},
    {name: 'name', type: 'string', default: '', description: 'Tên icon trong sprite. Sử dụng với <use href="#name" />.'},
    {name: 'variant', type: 'string', default: 'default auto', description: 'Chế độ hiển thị icon. `auto` tự xác định dựa trên `svg`, `name` hoặc `src`.'},
    {name: 'strokeWidth', type: 'string | number', default: '1.5', description: 'Độ dày nét vẽ cho icon SVG.'},
    {name: 'colorClass', type: 'string', default: '', description: 'CSS class cho màu sắc hoặc style tuỳ chỉnh.'},
    {name: 'ariaLabel', type: 'string', default: '', description: 'Label cho assistive technologies. Nếu không có và `decorative=true`, icon sẽ ẩn khỏi screen reader.'},
    {name: 'decorative', type: 'boolean', default: 'true', description: 'Nếu true, icon được coi là trang trí và không quan trọng về mặt nội dung.'},
    {name: 'decoding', type: 'sync | async | auto', default: ' async', description: 'Chế độ decoding cho ảnh <img>.'},
    {name: 'loading', type: 'eager|lazy ', default: ' lazy', description: 'Chế độ load ảnh <img>. `lazy` trì hoãn load đến khi cần hiển thị.'},
    {name: 'title', type: 'string', default: '', description: 'Tooltip hiển thị khi hover icon.'},
    {name: 'trustSvg', type: 'boolean', default: 'false', description: 'Nếu true, bypass Angular sanitizer cho SVG. Chỉ dùng với SVG đáng tin cậy.'},
    {name: 'spriteBase', type: 'string', default: '', description: 'Đường dẫn cơ sở cho sprite. Kết hợp với `name` để tạo href cho <use>.'},
  ];

  buttonProps: PropDoc[] = [
    { name: 'label', type: 'string', description: 'Text hiển thị trong nút' },
    { name: 'variant', type: 'primary|secondary|ghost|...', default: 'default primary', description: 'Kiểu nút' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Vô hiệu hóa' },
    { name: 'ariaLabel', type: 'string', description: 'Text của button nếu button chỉ có icon'},
    { name: 'type', type: 'button|submit|reset', default: 'button', description: 'loại của button'},
    { name: 'size', type: 'string', default: 'md', description: 'size của button'},
    { name: 'class', type: 'string', default: '', description: 'Thêm mới, hoặc chỉnh sửa lại style default'},
    { name: 'clicked', type: 'event', description: 'Sự kiện onclick'},
  ];

  searchBarProps: PropDoc[] = [
    { name: 'placeholder', type: 'string', default: 'Search...', description: 'Placeholder cho input' },
    { name: 'onSearch', type: 'EventEmitter<string>', description: 'Event khi submit' }
  ];


  getSuggestions = async (query: string) => {
    const molecules = ["Hydrogen","Helium","Lithium","Beryllium","Boron","Carbon","Nitrogen","Oxygen"];
    // Giả lập API delay
    await new Promise(res => setTimeout(res, 100));
    return molecules.filter(m => m.toLowerCase().includes(query.toLowerCase()));
  }
  
  onSearch(value: string) {
    console.log('User searched:', value);
   
  }
  

}
