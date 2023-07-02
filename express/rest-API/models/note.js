let notes = [
  {
    id: 1,
    title: "첫 메모",
    content: "애니가 작성한 첫 메모입니다.",
    author: "annie",
  },
  {
    id: 2,
    title: "두 번째는 밥이 작성했습니다.",
    content: "안녕하세요 밥입니다.",
    author: "bob",
  },
  {
    id: 3,
    title: "밥이 한번 더 썼습니다.",
    content: "밥이 작성한 두 번째 메모입니다.",
    author: "bob",
  },
  {
    id: 4,
    title: "크리스도 메모를 작성했습니다.",
    content: "안녕하세요 크리스입니다.",
    author: "chris",
  },
];

// 메모 목록 구현
exports.list = () => {
  return notes.map((id, title, author) => ({
    id,
    title,
    author,
  }));
};

// 메모 상세 구현
exports.get = (id) => {
  const note = notes.find((note) => note.id === id);

  if (!note) {
    throw new Error("Note not found");
  }
  return note;
};

// 메모 작성자 목록 구현
exports.authorList = () => {
  const authors = notes.map(({ author }) => author);
  return [...new Set(authors)];
};

// 메모 작성자 필터링
exports.findByAuthor = (author) => {
  const filtered = notes.filter((note) => note.author === author);

  if (filtered.length < 1) {
    throw new Error(`${author} has no note`);
  }
  return filtered;
};
