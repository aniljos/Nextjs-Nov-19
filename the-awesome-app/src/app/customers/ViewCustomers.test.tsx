import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CustomerView } from './page';

// Mock the global fetch function
beforeEach(() => {
  fetchMock.resetMocks();
});

describe('ListCustomers Component', () => {
  test('renders a list of customers after fetching', async () => {
    // Mock the fetch API response
    const mockCustomers = [
      { id: 1, name: 'Customer 1', location: "Mumbai" },
      { id: 2, name: 'Customer 2', location: "Bangalore" },
    ];
    fetchMock.mockResponseOnce(
      JSON.stringify(mockCustomers)
    );

    // Render the server component
    render(await CustomerView({interval: 1}));

    // Check if the customer heading is rendered
    expect(screen.getByText('Customers')).toBeInTheDocument();

    // Check if the customers are rendered
    expect(screen.getByText('Mumbai')).toBeInTheDocument();
    expect(screen.getByText('Customer 2')).toBeInTheDocument();

   
    
  });

  
});
