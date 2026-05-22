import '../App.scss';
import '../ProyectPage.scss'

const ProyectPage = () => {
    return (
        <div id="proyect-page-container">
            <button>{"<< Back to All Projects"}</button>
            <div id='header-panel'>
                <h3>elp Dataset Analysis: Key Findings and Insight</h3>
                <p>This report summarizes the major findings from the analysis of the Yelp Academic Dataset. The goal was to explore the characteristics of businesses, understand user behavior, and identify key trends that could inform business strategy. The analysis was conducted using SQL queries on a Pos</p>
            </div>

            <div id="skills-panel">
                <h3>Technology Stack</h3>
                <div>
                    {/*los tags de las herramietnas*/}
                </div>
            </div>

            <div id="index-panel">
                <h3>Project content</h3>
                <div>
                    {/*indice de cosas*/}
                </div>
            </div>

        </div>
    );
};

export default ProyectPage;