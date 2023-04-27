import WordListEntry from './WordListEntry.jsx';

const WordList = ({items, update, deleter}) => {


  return (

    <tbody>
      {items.map((item) => <WordListEntry item={item} update={update} deleter={deleter} key={item._id}/>)}
    </tbody>

  )
}

export default WordList;