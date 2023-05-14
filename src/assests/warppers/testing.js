import styled from "styled-components";

const Warpper = styled.main`
  background: rgb(15, 39, 63);
  background: -moz-linear-gradient(
    90deg,
    rgba(15, 39, 63, 1) 0%,
    rgba(22, 68, 112, 1) 50%,
    rgba(32, 110, 187, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(15, 39, 63, 1) 0%,
    rgba(22, 68, 112, 1) 50%,
    rgba(32, 110, 187, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(15, 39, 63, 1) 0%,
    rgba(22, 68, 112, 1) 50%,
    rgba(32, 110, 187, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0f273f",endColorstr="#206ebb",GradientType=1);
  height: 50vh;

  .page {
    /* position: absolute; */
    display: flex;
    justify-content: space-between;
    height: 90vh;
    /* margin-top: 1rem; */

    gap: 0rem;
  }
  .im{
    height: 100vh;
  }
  .info {
    padding: 60px;
    margin: 10px;
  }
  .info_2 {
    gap: 4rem;
  }
  .main_img {
    display: none;
  }
  .tw_btn {
    padding: 30px;
    display: "flex";
    gap: "1rem";
  }
  @media (min-width: 992px) {
    .page {
    }
    .main_img {
      height: 50vh;
      display: block;
    }
  }
  .second_part {
    background: #bfdaf6;
    font-size: large;
    height: 100vh;
    .h1 {
      font-size: 10px;
    }
    /* display: flex; */
    /* justify-content: space-between; */
    gap: 7rem;
  }

  
`;
export default Warpper;
