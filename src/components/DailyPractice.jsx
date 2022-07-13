import './components.css';
import PracticeCard from './PracticeCard';

function DailyPractice ({ headings, dailyPractice }) {

    if (dailyPractice.length === 0 || headings.length === 0) {
        return (
            <div className='page-layout'>
                <p>Your daily practice routine is currently empty. Try adding some practice items on the Admin Panel, then check back here!</p>
            </div>
        )
    } else {

        return (
            <div className="page-layout">
                {headings.map((heading, index) => {
                    return (
                        <div key={index}>
                            <li><h1>{heading}</h1></li>
                            <hr className='heading-divider' />
                            <div className='practice-section'>
                            <ul className='card-list'>
                                {dailyPractice.map((practice, index) => {
                                    if (practice.heading === heading) {
                                        return (
                                            <li>
                                            <PracticeCard 
                                                index={index}
                                                heading={practice.heading}
                                                title={practice.title}
                                                description={practice.description}
                                                time={practice.time}
                                                />
                                            </li>
                                        )
                                    }
                                })}
                            </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
    )
            }
}

export default DailyPractice;