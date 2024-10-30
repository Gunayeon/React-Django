import React, { Component } from 'react';

class App extends Component {
  state = {
    posts: [], // 초기 상태
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:8000/api/');
      const data = await res.json(); // API 응답을 JSON으로 파싱
      this.setState({ posts: data.results }); // results에서 posts를 설정
    } catch (error) {
      console.log(error); // 에러 발생 시 로그 출력
    }
  }

  render() {
    return (
      <div>
        {this.state.posts.length > 0 ? (
          this.state.posts.map(item => (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <span>{item.content}</span>
            </div>
          ))
        ) : (
          <p>게시물이 없습니다.</p> // 게시물이 없을 경우 메시지 출력
        )}
      </div>
    );
  }
}

export default App;
