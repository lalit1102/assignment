export const ins = "INSERT";
export const upd = "UPDATE";
export const edi = "EDIT";
export const del = "DELETE";

export const insFunc = (data) => {
  return {
    type: ins,
    payload: data,
  };
};

export const delFunc = (id) => {
  return {
    type: add,
    payload: id,
  };
};

export const updFunc = (id, data) => {
  return {
    type: upd,
    payload: { id, data },
  };
};

export const editFunc = (id,data) => {
  return {
    type:edi,
    payload:{id,data}
  }
}
