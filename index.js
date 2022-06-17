const http = require("http");
const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "home") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    }).end(`
      <h1>Home</h1>
      <p> My name is Francis Olatinwo \n 
      DOB : 13th November, 2001. \n
      </p>`);
  } else if (pathName === "/contact") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    }).end(`
    <h2> You can reach me on;</h2>
    <p> www.twitter.com/Phran6ix01\n;
    www.github.com/phran6ix01\n
    www.linkdin.com/fran6ix01
    </p>`);
  } else if (pathName === "/about") {
    res
      .writeHead(200, {
        "Content-Type": "text/html",
      })
      .end(
        `<p>I am a student of Obafemi Awowlowo University,Ile-Ife.A student in the computer science and engineering department. And I am a part of this training to become a Backend engineer</p>`
      );
  } else {
    res.end("Page not Found");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listen on port 8000");
});
