import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { instance } from '../api/api.ts';
import { CreateUserSchemaType } from '../components/createUserForm/CreateUserForm.tsx';

type ExtendedCreateUserSchemaType = CreateUserSchemaType & {
  invite_id: number;
  is_waiting: boolean;
};

const initialState: ExtendedCreateUserSchemaType[] = [];

export const singUpUser = createAsyncThunk<
  ExtendedCreateUserSchemaType,
  ExtendedCreateUserSchemaType
>(
  'singUp/singUpUser',
  async (data: ExtendedCreateUserSchemaType): Promise<ExtendedCreateUserSchemaType> => {
    const response = await instance.post('/auth/registration', {
      ...data,
      invite_id: 0,
      is_waiting: false
    });
    console.log(response.data);
    return response.data as ExtendedCreateUserSchemaType;
  }
);

const singUpSlice = createSlice({
  name: 'singUp',
  initialState,
  reducers: {
    // singUpUser(state, action: PayloadAction<ExtendedCreateUserSchemaType>) {
    //   console.log({ ...action.payload, invite_id: 0, is_waiting: false });
    //   return [...state, { ...action.payload, invite_id: 0, is_waiting: false }];
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(
      singUpUser.fulfilled,
      (state, action: PayloadAction<ExtendedCreateUserSchemaType>) => {
        console.log([...state, { ...action.payload }]);
        return [...state, { ...action.payload }];
      }
    );
  }
});

// export const { singUpUser } = singUpSlice.actions;
export const singUpReducer = singUpSlice.reducer;
