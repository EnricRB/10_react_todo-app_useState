import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ItemCard } from './ItemCard';
import styles from './ItemCard.module.css';

describe('ItemCard', () => {
  test('should render pending item with correct formatting', () => {
    // Arrange
    const pendingItem = {
      id: 1,
      title: 'Test Task',
      description: 'Test Description',
      status: 'pending',
    };

    // Act
    render(<ItemCard item={pendingItem} />);

    // Assert
    const title = screen.getByText('Test Task');
    const description = screen.getByText('Test Description');
    const status = screen.getByText('pending');

    expect(title).toBeInTheDocument();
    expect(title).not.toHaveClass(styles['title--completed']);
    expect(title).not.toHaveClass(styles['title--inProgress']);
    expect(description).toBeInTheDocument();
    expect(status).toBeInTheDocument();
    expect(status).toHaveClass(styles['status--pending']);
  });

  test('should render in progress item with correct formatting', () => {
    // Arrange
    const inProgressItem = {
      id: 2,
      title: 'Test Task',
      description: 'Test Description',
      status: 'in progress',
    };

    // Act
    render(<ItemCard item={inProgressItem} />);

    // Assert
    const title = screen.getByText('Test Task');
    const status = screen.getByText('in progress');

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass(styles['title--inProgress']);
    expect(status).toHaveClass(styles['status--inProgress']);
  });

  test('should render done item with correct formatting', () => {
    // Arrange
    const doneItem = {
      id: 3,
      title: 'Test Task',
      description: 'Test Description',
      status: 'done',
    };

    // Act
    render(<ItemCard item={doneItem} />);

    // Assert
    const title = screen.getByText('Test Task');
    const status = screen.getByText('done');

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass(styles['title--completed']);
    expect(status).toHaveClass(styles['status--completed']);
  });
});
