var cardData = [
    {
      title: "C++ 基础语法 - 1 前言、OJ、编辑器、输入输出与 int 类型变量",
      link: "blog/1.html",
      time: "15:38, 2024/3/30(UTC+8)",
      author: "Hatmic",
      num: 1
    },
    {
      title: "C++ 基础语法 - 2 分支结构",
      link: "blog/2.html",
      time: "16:20, 2024/3/30(UTC+8)",
      author: "Hatmic",
      num: 2
    },
    {
      title: "C++ 基础语法 - 3 循环结构",
      link: "blog/3.html",
      time: "16:20, 2024/3/30(UTC+8)",
      author: "Hatmic",
      num: 3
    },
    {
      title: "C++ 基础语法 - 4 数组",
      link: "blog/4.html",
      time: "22:13, 2024/3/30(UTC+8)",
      author: "Hatmic",
      num: 4
    }
];

var container = document.getElementById("card-container");

cardData.forEach(function(card) {
    var html = `
        <div class="card" data-card-id="${card.num}">
          <div class="title">
              <a href="${card.link}" target="_blank">
              <h3>${card.title}</h3>
              <div class="time">
                  <p>${card.time}</p>
                  <p>
                  <img src="https://avatars.githubusercontent.com/u/150152150?v=4" alt="" class="author">
                  <span>${card.author}</span>
                  </p>
              </div>
              </a>
          </div>
        </div>
    `;

    container.innerHTML += html;
});