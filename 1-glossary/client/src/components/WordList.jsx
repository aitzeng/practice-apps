import WordListEntry from './WordListEntry.jsx';

const WordList = ({items}) => {


  return (

    <tbody>
      {items.map((item) => <WordListEntry item={item} key={item.word}/>)}
    </tbody>

  )
}

export default WordList;