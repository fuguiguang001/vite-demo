
import {onMounted} from 'vue'

// 定义泛型
type Option = {
  el: string
}

export default function useBase64(option: Option): Promise<{base64: string}>{
  // 创建Promise对象返回base值
  return new Promise((resolve) => {
    onMounted(()=>{
      let img:HTMLImageElement = document.querySelector(option.el) as HTMLImageElement
      img.onload = ()=>{
        resolve({
          base64: base64(img)
        })
      }
    })
    // 创建canvas产生base值
    const base64 = (el: HTMLImageElement) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d')
      canvas.width = el.width
      canvas.height = el.height
      ctx?.drawImage(el,0,0,canvas.width,canvas.height)
      return canvas.toDataURL('image/png')
    }
  })
}