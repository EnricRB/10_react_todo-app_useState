import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ItemsList } from './ItemsList';

describe('ItemsList', () => {
  const mockItems = [
    {
      id: 1,
      title: 'Test Task 1',
      description: 'Test Description 1',
      status: 'pending',
    },
    {
      id: 2,
      title: 'Test Task 2',
      description: 'Test Description 2',
      status: 'in progress',
    },
    {
      id: 3,
      title: 'Test Task 3',
      description: 'Test Description 3',
      status: 'done',
    },
  ];

  test('should render all items from the list', () => {
    // Arrange
    const items = mockItems;

    // Act
    render(<ItemsList itemsList={items} />);

    // Assert
    expect(screen.getByText('Test Task 1')).toBeInTheDocument();
    expect(screen.getByText('Test Task 2')).toBeInTheDocument();
    expect(screen.getByText('Test Task 3')).toBeInTheDocument();
    expect(screen.getByText('Test Description 1')).toBeInTheDocument();
    expect(screen.getByText('Test Description 2')).toBeInTheDocument();
    expect(screen.getByText('Test Description 3')).toBeInTheDocument();
  });

  test('should render empty list when no items provided', () => {
    // Arrange
    const items = [];

    // Act
    render(<ItemsList itemsList={items} />);

    // Assert
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });
});
