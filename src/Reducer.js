let taskId= 0
export default function reducer(state=[], action){
    switch(action.type){
        case 'AddTodo':
            return[
                ...state,
                {
                    id:++taskId,
                    task:action.payload.task,
                    completed:false
                }
            ]
            case 'delTask':
              return  state.filter(todo=> todo.id !== action.payload.id)
              case 'check':
             return state.map(item=> item.id===action.payload.id ? {...item, completed:!item.completed}:item)
                default: 
                return state;
    }

}