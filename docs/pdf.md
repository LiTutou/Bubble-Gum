asdad

## 导出 pdf

[[toc]]


- 123

::: info
This is an info box.
:::

##### 导出 pdf

```javascript
// REP表格数据导出
import "./simhei-normal";
import autoTable from "jspdf-autotable";
import jsPDF from "jspdf";
/**
 * @param {Array} heads 表头
 * @param {Array} headerTextArr 标题
 * @param {Array} bodys 表格数据
 * @param {String} name 工程名称
 */
jsPDF.autoTableSetDefaults({
  headStyles: { fillColor: 255, textColor: 0 },
});
export default {
  install(Vue) {
    Vue.prototype.saveAllPdf = function (heads, headerTextArr, bodys, name) {
      let arr = [];
      for (let i = 0; i < bodys.length; i++) {
        const item = bodys[i];
        const list = heads[i];
        const element = headerTextArr[i];
        if (item.length === 0) {
          continue;
        }
        removePropertyOfNull(item);
        let obj = {};
        obj.a = item.map((e) => Object.values(e));
        obj.b = list;
        obj.c = element;
        arr.push(obj);
      }

      var doc = new jsPDF("l", "pt", "a4");
      arr.map((item, index) => {
        doc.setFont("simhei");
        doc.setFontSize(18);
        doc.text(item.c.title, setTextCenter(doc, item.c.title.length), 35);
        doc.setFontSize(8);
        doc.text(item.c.left, 35, 48);
        doc.text(item.c.right, 755, 48);
        doc.autoTable({
          head: item.b,
          body: item.a,
          theme: "grid",
          styles: {
            font: "simhei",
            fontSize: 8,
            lineWidth: 0.1,
            lineColor: 0,
          },
          margin: { top: 50, left: 30, right: 30, bottom: 30 },
          // 页脚增加name
          didDrawPage: function (e) {
            // var str = "Page " + doc.internal.getNumberOfPages()
            doc.setFontSize(8);
            var pageSize = doc.internal.pageSize;
            var pageHeight = pageSize.height
              ? pageSize.height
              : pageSize.getHeight();
            doc.text(name, e.settings.margin.left, pageHeight - 15);
          },
        });
        // 增加页面 调用保存方法
        index + 1 !== arr.length ? doc.addPage() : doc.save(`${name}.pdf`);
      });

      // 根据title文本长度居中 计算x轴距离
      function setTextCenter(pdf, txtLength) {
        var fontSize = pdf.getFontSize();
        var pageWidth = pdf.internal.pageSize.width;
        const txtWidth = (txtLength * fontSize) / pdf.internal.scaleFactor;
        return (pageWidth - txtWidth) / 2;
      }
      //删除为空的数据
      function removePropertyOfNull(obj) {
        var i = obj.length;
        while (i--) {
          if (obj[i] === null) {
            obj.splice(i, 1);
          }
        }
        return obj;
      }
    };
  },
};
```

### 导出 pdf

## 测试 1

### 导出 pdf

## 测试 2
