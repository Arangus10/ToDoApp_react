import React from "react";
import PageTitle from "../PageTitle/PageTitle";
import styles from './About.module.scss'

const About = () => {
  return (
    <div className={styles.about}>
      <PageTitle>the 2 Do List</PageTitle>
      <h1>Why is making lists important?</h1>
      
<ul className={styles.aboutList}>
    <li>1. Lists bring order to chaos. "People are attracted to lists because we live in an era of overstimulation, especially in terms of information," says David Wallechinsky, a co-author of the fabulous Book of Lists, first published in 1977 and followed by subsequent editions. "And lists help us in organizing what is otherwise overwhelming."</li>
    <br/>
    <li>2. Lists help us remember things — at the hardware store, for the vacation trip, Christmas presents. The One Planet Education Network, or OPEN, is a global online education content provider that counts Harvard and Columbia universities as clients. OPEN also swears by lists. "Checklists help you remember what you have done and what you have to do," the curriculum reminds the students.</li>
    <br/>
    <li>3. Most lists are finite. They don't usually go on and on. And if they do, you can skip to the bottom of the list. The Internet Movie Database, for instance, lists its "bottom 100 movies as voted by users." The winner — er, loser — is Zaat, a 1975 sci-fi fiasco.</li>
    <br/>
    <li>4. Lists can be meaningful. The Steven Spielberg classic Schindler's List is based on the true story of a German businessman who used a list of names to save more than 1,000 Jews from the concentration camps. It is ranked eighth on the American Film Institute's 2007 list of 100 top American films of the past 100 years. </li>
    <br/>
    <li>5. Lists can be as long or as short as necessary. Jamie Frater, a New Zealand opera singer, maintains a list-keeping site called The List Universe. Recent posts include "20 Great Quotes from Ronald Reagan" and "Top 10 Codes You Aren't Meant to Know." A list, Frater says, should be "as long as is necessary. Some lists need be only a few lines an item, others a few paragraphs. I seldom write more than one paragraph, but occasionally the need arises to do so." Frater adds, "This question is a bit like asking an artist: 'When is the painting finished?' It is when it is."</li>
    <br/>
    <li>6. Making lists can help make you famous. Notable list makers include Thomas Jefferson, Peter Mark Roget, Martha Stewart and Benjamin Franklin. "A methodical and wry man," wrote Franklin biographer Walter Isaacson in Time magazine, "Franklin loved making lists. He made lists of rules for his tradesmen's club, of synonyms for being drunk, of maxims for matrimonial happiness and of reasons to choose an older woman as a mistress. Most famously, as a young man, he made a list of personal virtues that he determined should define his life."</li>
    <br/>
    <li>7. The word "list" can be tracked back to William Shakespeare, according to the Oxford English Dictionary. In Hamlet, the Bard refers to "a list of landlesse resolutes."</li>
    <br/>
    <li>8. Lists relieve stress and focus the mind. "Lists," sociologist Scott Schaffer told The Oregonian newspaper, "really get to the heart of what it is we need to do to get through another day on this planet."</li>
    <br/>
    <li>9. Lists can force people to say revealing things. In his 25 Random Things roster, former California Gov. Jerry Brown reveals that his favorite cereal is ... Flax Plus Multibran.</li>
    <br/>
    <li>10. Lists can keep us from procrastinating. We put this one off until the end. Making a list enables us to get our heads around really big tasks — and helps us tackle the work one aspect at a time. But a list is only useful if it reveals a truth, solves a problem or leads to action. Making a list, for instance, does not necessarily help procrastinators. As DePaul University psychologist Joseph Ferrari told Psychology Today in 2008, people don't put off work they must do because they lack list-making skills. And, in turn, making a list does not get the job done.</li>
</ul>
    </div>
  );
};

export default About;