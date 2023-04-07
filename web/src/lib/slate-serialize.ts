function serializeSlateJsonToHtml(json) {
  let html = ''

  json.forEach((element) => {
    if (element.type === 'paragraph') {
      let paragraphHtml = ''
      element.children.forEach((child) => {
        if (child.bold) {
          paragraphHtml += `<strong>${child.text}</strong>`
        } else if (child.italic) {
          paragraphHtml += `<em>${child.text}</em>`
        } else if (child.underline) {
          paragraphHtml += `<u>${child.text}</u>`
        } else if (child.code) {
          paragraphHtml += `<code>${child.text}</code>`
        } else {
          paragraphHtml += child.text
        }
      })
      if (element.align) {
        paragraphHtml = `<span style="text-align: ${element.align}; display: block;">${paragraphHtml}</span>`
      }
      html += `${paragraphHtml}<br>`
    } else if (element.type === 'block-quote') {
      if (element.children.length > 0) {
        html += `"${element.children[0].text}" -${element.children[0].text}<br>`
      } else {
        html += `<br>`
      }
    } else if (element.type === 'numbered-list') {
      html += `<ol>`
      element.children.forEach((child) => {
        html += `<li>${child.children[0].text}</li>`
      })
      html += `</ol>`
    } else if (element.type === 'bulleted-list') {
      html += `<ul>`
      element.children.forEach((child) => {
        html += `<li>${child.children[0].text}</li>`
      })
      html += `</ul>`
    }
  })
  console.log(html)
  return html
}

export default serializeSlateJsonToHtml
