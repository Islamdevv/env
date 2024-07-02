interface Todo {
  _id?: number;
  title: string;
  img: string;
}

namespace TODO {
  type getReq = void;
  type postReq = {
    title: string;
    img: string;
  };
  type EditReq = {
    _id: number;
    newData: Todo;
  };
  type deleteReq = number;
}
