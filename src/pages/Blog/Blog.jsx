

const Blog = () => {
    return (
        <div className="max-w-5xl mx-auto my-10">
            <div className="collapse collapse-arrow bg-base-200 mb-5">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                What is One way data binding?
                </div>
                <div className="collapse-content">
                    <p>One-way means that the binding happens in one direction. In this case, changes in the data automatically update the UI, but changes in the UI do not automatically update the data. That's why it is referred to as one-way data binding. React achieves one-way data binding by using state and props</p>
                    <img className="my-4" src="https://i.ibb.co/JzyQBfW/image10.png" alt="" />
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-5">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                What is NPM in node.js? <span className="text-sm">(Double click)</span>
                </div>
                <div className="collapse-content">
                    <p>To build an application with JavaScript or any other frameworks like Angular, React, Express or Node.js, we rely on a Package Manager to install its dependencies. This package manager is called as NPM. </p>
                    <img className="my-4" src="https://i.ibb.co/N77gwVP/download.png" alt="" />
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-5">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                Different between Mongodb database vs mySQL database <span className="text-sm">(Double click)</span>
                </div>
                <div className="collapse-content">
                    <p>MySQL and MongoDB are two of the most in-demand and competitive database services for web applications. Both are database management systems (DBMS) that enable you to extract data and create reports from a site or application, but they are designed in different ways. MySQL is a legacy table-structured system, whereas MongoDB is a document-based system. MongoDB is a document-based non-relational database management system. It's also called an object-based system. It was designed to supplant the MySQL structure as an easier way to work with data. On the other hand, MySQL is a table-based system (or open-source relational database). <br />
                    <br />
                    The “My” in “MySQL” is not a pronoun, as some may mistake it to be. It is a shortened name of one of the developers’ daughters. Swedish developers originally created the ubiquitous database and continue to have an impact in the database space. However, the Oracle corporation owns it today. Competitors have also subsequently adapted the relational language, as seen with the MS SQL database server and PostgreSQL.  
                    <br />
                    <br />
                    MongoDB serves e-commerce and content serving sites, for example, that benefit from its flexibility and scalability. Businesses use the MongoDB database as a high-performance solution to update data more quickly in structure and information. 
                    </p>
                    <img className="my-4" src="https://i.ibb.co/3dChBDm/Mongodb-vs-mysql.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Blog;