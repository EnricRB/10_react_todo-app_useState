import { useState } from 'react';
import styles from './TaskForm.module.css';

export const TaskForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'pending',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: '',
      description: '',
      status: 'pending',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="title">Titol</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="description">Descripció</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="status">Estat</label>
        <select id="status" name="status" value={formData.status} onChange={handleChange}>
          <option value="pending">Pendiente</option>
          <option value="in progress">En progreso</option>
          <option value="done">Completado</option>
        </select>
      </div>
      <button type="submit" className={styles.submitButton}>
        Agregar Tarea
      </button>
    </form>
  );
};
