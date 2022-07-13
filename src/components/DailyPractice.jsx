import './components.css';
import PracticeCard from './PracticeCard';

function DailyPractice ({ headings, dailyPractice }) {
    return (
        <div className="daily-practice">
            {headings.map((heading, index) => {
                return (
                    <div className='practice-section' key={index}>
                        <li><h1>{heading}</h1></li>
                        <ul>
                            {dailyPractice.map((practice, index) => {
                                if (practice.heading === heading) {
                                    return (
                                        <PracticeCard 
                                            heading={practice.heading}
                                            title={practice.title}
                                            description={practice.description}
                                            time={practice.time}
                                            />
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