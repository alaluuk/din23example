# din23example

In this example, I will create an REST API using Node.js and Express-framework.

I will use the MVC-model and the <b>controllers</b>, will be inside <b>routes</b> folder and <b>models</b> inside <b>models-folder</b>.

One student asked me a good question in the class room about express() and express.Router(). The answer is that:
<ul>
<li>express() is used to create an instance of an Express application, which represents the entire web application.
</li>
<li>
express.Router() is used to create a router object, which represents a subset of the application's routes and middleware, useful for modularizing and organizing the code.</li>
</ul>

## MySQL

Install the MySQL module with the command <b>npm install mysql2</b>

Execute code 
<pre>
CREATE USER 'netuser'@'localhost' IDENTIFIED BY 'netpass';
GRANT ALL ON library.* TO 'netuser'@'localhost';
</pre>