var cardData = [
    {
      title: "C++ 基础语法 - 1 前言、OJ、编辑器、输入输出与 int 类型变量",
      link: "Cpp1/1.html",
      time: "15:38, 2024/3/30(UTC+8)",
      author: "Hatmic"
    },
    {
      title: "C++ 基础语法 - 2 分支结构",
      link: "Cpp1/2.html",
      time: "16:20, 2024/3/30(UTC+8)",
      author: "Hatmic"
    },
    {
      title: "C++ 基础语法 - 3 循环结构",
      link: "Cpp1/3.html",
      time: "16:20, 2024/3/30(UTC+8)",
      author: "Hatmic"
    },
    {
      title: "C++ 基础语法 - 4 数组",
      link: "Cpp1/4.html",
      time: "22:13, 2024/3/30(UTC+8)",
      author: "Hatmic"
    }
];

var container = document.getElementById("card-container");

cardData.forEach(function(card) {
    var html = `
        <div class="card">
        <div class="title">
            <a href="${card.link}" target="_blank">
            <h3>${card.title}</h3>
            <div class="time">
                <p>${card.time}</p>
                <p>
                <img src="img/Profile0.jpg" alt="" class="author">
                <span>${card.author}</span>
                </p>
            </div>
            </a>
        </div>
        </div>
    `;

    container.innerHTML += html;
});