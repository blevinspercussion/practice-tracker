import './components.css';

function Home () {
    return (
        <div className='home'>
            <h1>Welcome to the Practice Tracker!</h1>
            <p>The practice tracker is a web app that will help teachers and students keep track of their progress and daily practice routine.</p>
            <p>You can use the 'Admin Panel' link above to add practice items or goals to track.</p>
            <p>You can start setting up a customized practice routine by adding 'headings' that will help you keep your practice routine organized.
                Headings will detail the different sections of the practice routine and will help keep things structured. You can have as many headings 
                as you like and you can call them anything your choose, but some possibilities to get you started are: warmup, technique, reading, scales, 
                or repertoire.
            </p>
            <p>After you use the heading to structure your practice routine, you can start adding individual items. Each item should have a heading, 
                (chosen from the headings you already created), a title, a description or extra set of notes, and a set time (in minutes) that should 
                be spent on that item. Went you click the 'submit' button, your new practice item will appear under the correct heading at the bottom 
                of the screen.
            </p>
            <p>
                Next is the goal tracker section. You can set a list of customized long term and short term goals. Short term goals are goals should 
                be completed on shorter time frames, typically on the order of weeks or maybe a few months. Long term goals are goals that are expected 
                to be completed in the order of many months or over a year. Some long term goals may even take multiple years to complete.
            </p>
            <p>Each student should work closely with their instructor to determine what their goals are and how long it will take to complete them. Short 
                term goals could be something like: Play Paradiddles at 100bpm, learn all 12 major scales, learn three songs, etc. Some examples of long 
                term goals could be: Join or form your first band, learn all scale modes, learn 20 songs, get your first paying gig, etc.
            </p>
            <p>What constitutes a short term vs. a long term goal is subjective and will vary from student to student. That's why studying with a qualified 
                 private instructor is so important! That way you will have someone with experience that can lead you through a realistic set of goals and 
                 help you achieve them! 
            </p>
            <p>
                After you have your practice routine and goals in place, you can view them from the Daily Practice and Goals links at the top of the page. 
                You can alter your practice routine and goals at any time, and you can even check them off as you complete them.
            </p>
            <p>And most of all...don't forget to have fun!</p>
        </div>
    )
}

export default Home;