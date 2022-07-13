import './components.css';
import PracticeCard from './PracticeCard';

function DailyPractice ({ headings, dailyPractice }) {
    return (
        <div className="daily-practice">
            {headings.map((heading, index) => {
                return (
                    <div key={index}>
                        <li><h1>{heading}</h1></li>
                        <hr className='heading-divider' />
                        <ul>
                            {dailyPractice.map((practice, index) => {
                                if (practice.heading === heading) {
                                    return (
                                        <div className='practice-section'>
                                        <li>
                                        <PracticeCard 
                                            index={index}
                                            heading={practice.heading}
                                            title={practice.title}
                                            description={practice.description}
                                            time={practice.time}
                                            />
                                        </li>
                                        </div>
                                    )
                                }
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default DailyPractice;