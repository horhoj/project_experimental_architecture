import { useFormik } from 'formik';
import { FC } from 'react';
import * as yup from 'yup';
import { Button } from '../../../UIKit/Button';
import { Input } from '../../../UIKit/Input';
import { TextArea } from '../../../UIKit/TextArea';
import styles from './TodoItemForm.module.scss';
import { TodoItemData } from './types';

interface TodoItemFormProps {
  todoItemData: TodoItemData;
  onSubmit(values: TodoItemData): void;
  onCancel(): void;
}

const validationSchema = yup.object({
  title: yup.string().required('Must not be empty!!!'),
  body: yup.string().required('Must not be empty!!!'),
});

export const TodoItemForm: FC<TodoItemFormProps> = ({
  todoItemData,
  onSubmit,
  onCancel,
}) => {
  const formik = useFormik({
    initialValues: todoItemData,
    onSubmit,
    validationSchema,
  });

  return (
    <div className={styles.wrap}>
      <form
        onSubmit={formik.handleSubmit}
        noValidate
        autoComplete={'off'}
        className={styles.wrap}
      >
        <div className={styles.field}>
          <label>Title</label>
          <Input
            type="text"
            placeholder={'please input title'}
            {...formik.getFieldProps('title')}
          />
          {Boolean(formik.touched.title) && Boolean(formik.errors.title) && (
            <div className={styles.msgError}>{formik.errors.title}</div>
          )}
        </div>

        <div className={styles.field}>
          <label>Body</label>
          <TextArea
            placeholder={'please input title'}
            {...formik.getFieldProps('body')}
          />
          {Boolean(formik.touched.body) && Boolean(formik.errors.body) && (
            <div className={styles.msgError}>{formik.errors.body}</div>
          )}
        </div>

        <div className={styles.controlPanelWrap}>
          <Button type={'submit'}>save</Button>
          <Button type={'button'} onClick={onCancel}>
            cancel
          </Button>
        </div>
      </form>
    </div>
  );
};
