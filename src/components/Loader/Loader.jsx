import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader-overlay">
        <section className="container">
          <section className="loader">
            {[...Array(9)].map((_, i) => (
              <article
                key={i}
                style={{ "--rot": i }}
                className={`sphere sphere${i + 1}`}
              >
                {[...Array(9)].map((_, j) => (
                  <div key={j} className="item" style={{ "--rot-y": j + 1 }} />
                ))}
              </article>
            ))}
          </section>
        </section>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    position: relative;
    width: 400px;
    height: 400px;
    zoom: 0.5;
  }

  .loader {
    position: absolute;
    top: calc(70% - 200px);
    left: calc(70% - 200px);
    animation: girar 8s linear infinite;
    transform-style: preserve-3d;

    .sphere,
    .item {
      width: 200px;
      height: 200px;
      position: absolute;
      transform-style: preserve-3d;
      perspective: 10000px;
    }

    .sphere,
    .item {
      top: 0;
      left: 0;
    }

    .sphere {
      transform: rotate(calc(var(--rot) * 20deg));

      &.sphere1 {
        --bg: #ff000088;
      }
      &.sphere2 {
        --bg: #ff00ff88;
      }
      &.sphere3 {
        --bg: #ffff0088;
      }
      &.sphere4 {
        --bg: #00ff0088;
      }
      &.sphere5 {
        --bg: #00ffff88;
      }
      &.sphere6 {
        --bg: #0000ff88;
      }
      &.sphere7 {
        --bg: #dc1ddf88;
      }
      &.sphere8 {
        --bg: #ffa50088;
      }
      &.sphere9 {
        --bg: #e5b2ca88;
      }
    }

    .item {
      border-radius: 50%;
      background: var(--bg);
      transform: rotateY(calc(var(--rot-y) * 40deg));
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
  }

  @keyframes girar {
    0% {
      transform: rotateX(0deg) rotateY(0deg);
    }
    100% {
      transform: rotateX(360deg) rotateY(360deg);
    }
  }
`;

export default Loader;
