import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container-top {
    display: grid;
    grid-gap: 10px 50px;
    grid-template-areas:
      'title title'
      'items items-price'
      'delevery-tax delevery-tax-price';

    .title {
      grid-area: title;
      margin-bottom: 20px;
    }

    .items {
      grid-area: items;
    }

    .items-price {
      grid-area: items-price;
    }

    .delevery-tax {
      grid-area: delevery-tax;
    }

    .delevery-tax-price {
      grid-area: delevery-tax-price;
    }
  }

  .container-bottom {
    display: flex;
    justify-content: space-around;
    font-size: 22px;
    margin-top: 50px;
  }
`
