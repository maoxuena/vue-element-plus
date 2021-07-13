<template>
  <div class="hover-effect-page">
    <h2>鼠标悬停图片动画过渡特效</h2>
    <el-divider content-position="left">Demo - Circle</el-divider>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Circle Hover effect 1</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle effect1">
                <div class="spinner"></div>
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/2.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>     
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Circle Hover effect 2</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle left_to_right effect2">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/4.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle right_to_left effect2">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/5.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle top_to_bottom effect2">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/6.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle bottom_to_top effect2">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/7.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Circle Hover effect 3</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle left_to_right effect3">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/1.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle right_to_left effect3">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/2.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle top_to_bottom effect3">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/3.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle bottom_to_top effect3">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/4.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>     
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Circle Hover effect 4</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle left_to_right effect4">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/5.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle right_to_left effect4">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/6.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle top_to_bottom effect4">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/7.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle bottom_to_top effect4">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/8.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Circle Hover effect 5</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle effect5">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/1.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Circle Hover effect 6</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle scale_up effect6">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/5.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle scale_down effect6">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/6.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle scale_down_up effect6">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/7.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>       
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Circle Hover effect 7</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle left_to_right effect7">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/1.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle right_to_left effect7">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/2.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle top_to_bottom effect7">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/3.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle bottom_to_top effect7">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/4.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Circle Hover effect 8</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle left_to_right effect8">
                <div class="img-container">
                  <div class="img">
                    <img :src="require('@/assets/images/hoverEffect/5.jpg')" alt="img">
                  </div>
                </div>
                <div class="info-container">
                  <div class="info-box">
                    <h3>Heading here</h3>
                    <p>Description goes here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle right_to_left effect8">
                <div class="img-container">
                  <div class="img">
                    <img :src="require('@/assets/images/hoverEffect/6.jpg')" alt="img">
                  </div>
                </div>
                <div class="info-container">
                  <div class="info-box">
                    <h3>Heading here</h3>
                    <p>Description goes here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle top_to_bottom effect8">
                <div class="img-container">
                  <div class="img">
                    <img :src="require('@/assets/images/hoverEffect/7.jpg')" alt="img">
                  </div>
                </div>
                <div class="info-container">
                  <div class="info-box">
                    <h3>Heading here</h3>
                    <p>Description goes here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle bottom_to_top effect8">
                <div class="img-container">
                  <div class="img">
                    <img :src="require('@/assets/images/hoverEffect/8.jpg')" alt="img">
                  </div>
                </div>
                <div class="info-container">
                  <div class="info-box">
                    <h3>Heading here</h3>
                    <p>Description goes here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>     
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Circle Hover effect 9</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle left_to_right effect9">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/1.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle right_to_left effect9">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/2.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle top_to_bottom effect9">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/3.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle bottom_to_top effect9">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/4.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Circle Hover effect 10</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle top_to_bottom effect10">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/7.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle bottom_to_top effect10">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/8.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>     
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Circle Hover effect 11</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle left_to_right effect11">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/1.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle right_to_left effect11">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/2.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle top_to_bottom effect11">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/3.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle bottom_to_top effect11">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/4.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>       
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Circle Hover effect 12</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle left_to_right effect12">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/5.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle right_to_left effect12">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/6.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle top_to_bottom effect12">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/7.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle bottom_to_top effect12">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/8.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Circle Hover effect 13</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle from_left_and_right effect13">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/1.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle top_to_bottom effect13">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/3.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle bottom_to_top effect13">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/4.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Circle Hover effect 14</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle left_to_right effect14">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/5.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle right_to_left effect14">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/6.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle top_to_bottom effect14">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/7.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle bottom_to_top effect14">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/8.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Circle Hover effect 15</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle effect15">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/1.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Circle Hover effect 16</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle left_to_right effect16">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/5.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle right_to_left effect16">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/6.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Circle Hover effect 17</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle effect17">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/1.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Circle Hover effect 18</span>
        </div>
      </template> 
      
     <el-alert
      title="Note: This will not work in IE9, since IE9 doesn't support 3d rotate."
      type="warning"
      effect="dark">
    </el-alert>
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle left_to_right effect18">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/5.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle right_to_left effect18">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/6.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle top_to_bottom effect18">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/7.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle bottom_to_top effect18">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/8.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Circle Hover effect 19</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle effect19">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/1.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Circle Hover effect 20</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle top_to_bottom effect20">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/7.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle bottom_to_top effect20">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/8.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </el-card>
    <el-divider content-position="left">Demo - Square</el-divider>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Square Hover effect 1</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square left_and_right effect1">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/1.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square top_to_bottom effect1">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/2.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square bottom_to_top effect1">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/3.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Square Hover effect 2</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square effect2">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/4.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Square Hover effect 3</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square bottom_to_top effect3">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/5.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square top_to_bottom effect3">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/6.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Square Hover effect 4</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square effect4">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/7.jpg')" alt="img">
                </div>
                <div class="mask1"></div>
                <div class="mask2"></div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Square Hover effect 5</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square left_to_right effect5">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/8.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square right_to_left effect5">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/9.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Square Hover effect 6</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square from_top_and_bottom effect6">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/10.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square from_left_and_right effect6">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/1.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square top_to_bottom effect6">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/2.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square bottom_to_top effect6">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/3.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Square Hover effect 7</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square effect7">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/4.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Square Hover effect 8</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square scale_up effect8">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/5.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square scale_down effect8">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/6.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Square Hover effect 9</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square bottom_to_top effect9">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/7.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square top_to_bottom effect9">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/8.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square left_to_right effect9">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/9.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square right_to_left effect9">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/10.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Square Hover effect 10</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square left_to_right effect10">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/1.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square right_to_left effect10">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/2.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square top_to_bottom effect10">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/3.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square bottom_to_top effect10">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/4.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Square Hover effect 11</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square left_to_right effect11">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/1.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square right_to_left effect11">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/2.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square top_to_bottom effect11">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/3.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square bottom_to_top effect11">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/4.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Square Hover effect 12</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square left_and_right effect12">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/5.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square right_to_left effect12">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/6.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square top_to_bottom effect12">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/7.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square bottom_to_top effect12">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/8.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Square Hover effect 13</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square left_to_right effect13">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/9.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square right_to_left effect13">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/10.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square top_to_bottom effect13">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/1.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square bottom_to_top effect13">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/2.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Square Hover effect 14</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square left_to_right effect14">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/3.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square right_to_left effect14">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/4.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square top_to_bottom effect14">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/5.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square bottom_to_top effect14">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/6.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Square Hover effect 15</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square left_and_right effect15">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/7.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square right_to_left effect15">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/8.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square top_to_bottom effect15">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/9.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hover-effect-box">
          <div class="hover-effect-item is-square">
            <div class="content">
              <div class="hover-effect square bottom_to_top effect15">
                <div class="img">
                  <img :src="require('@/assets/images/hoverEffect/rect/10.jpg')" alt="img">
                </div>
                <div class="info-box">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </el-card>
  </div>
</template>

<script>
  export default {
    name:'HoverEffect'
  }
</script>

<style lang="scss" scoped>
.hover-effect-page{
  h2{
    font-size: 18px;
    padding: 10px 5px;
  }

  .box-card{
    margin-bottom: 15px;

    .hover-effect-container{
      flex-wrap: wrap;

      .hover-effect-box{
        width: 200px;

        .hover-effect-item{
          padding: 100% 100% 0 0;
          position: relative;

          &.is-square{
            padding: 66% 100% 0 0;
          }

          .content{
            position: absolute;
            left: 10px;
            top: 10px;
            right: 10px;
            bottom: 10px;
          }
        }
      }
    }
  }
}

.hover-effect{
  width: 100%;
  height: 100%;
  position: relative;
  -webkit-transition: all 0.35s ease-in-out;
  -moz-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
  color: #333;

  .img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    img {
      width: 100%;
      height: 100%;
    }
  }
  
  .info-box {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &.circle {
    border-radius: 50%;

    .img{      
      border-radius: 50%;

      img {
        border-radius: 50%;
      }
    }   
    
    .info-box {
      border-radius: 50%;
    }

    &.effect1 {
      .spinner {
        width: 100%;
        height: 100%;
        border: 10px solid #ecab18;
        border-right-color: #1ad280;
        border-bottom-color: #1ad280;
        border-radius: 50%;
        -webkit-transition: all 0.8s ease-in-out;
        -moz-transition: all 0.8s ease-in-out;
        transition: all 0.8s ease-in-out;
      }

      .img{      
        top: 10px;
        bottom: 10px;
        left: 10px;
        right: 10px;
      }

      .info-box {
        top: 10px;
        bottom: 10px;
        left: 10px;
        right: 10px;
        background: rgba(0, 0, 0, 0.6);
        opacity: 0;
        -webkit-transition: all 0.8s ease-in-out;
        -moz-transition: all 0.8s ease-in-out;
        transition: all 0.8s ease-in-out;

        h3 {
          color: #fff;
          text-transform: uppercase;
          position: relative;
          letter-spacing: 2px;
          font-size: 20px;
          margin: 0 30px;
          text-shadow: 0 0 1px white, 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        p {
          color: #bbb;
          padding: 10px 5px;
          font-style: italic;
          margin: 0 30px;
          font-size: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.5);
        }
      }

      &:hover {
        .spinner {
          -webkit-transform: rotate(180deg);
          -moz-transform: rotate(180deg);
          -ms-transform: rotate(180deg);
          -o-transform: rotate(180deg);
          transform: rotate(180deg);
        }

        .info-box {
          opacity: 1;
        }
      }
    }

    &.effect2{
      .img {
        opacity: 1;
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);
        -webkit-transition: all 0.35s ease-in-out;
        -moz-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;

        &::before {
          position: absolute;
          display: block;
          content: '';
          width: 100%;
          height: 100%;
          border-radius: 50%;
          box-shadow: inset 0 0 0 16px rgba(255, 255, 255, 0.6), 0 1px 2px rgba(0, 0, 0, 0.3);
          -webkit-transition: all 0.35s ease-in-out;
          -moz-transition: all 0.35s ease-in-out;
          transition: all 0.35s ease-in-out;
        }
      }

      .info-box {
        background: #333333;
        background: rgba(0, 0, 0, 0.6);
        opacity: 0;
        pointer-events: none;
        -webkit-transition: all 0.35s ease-in-out;
        -moz-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;

        h3 {
          color: #fff;
          text-transform: uppercase;
          position: relative;
          letter-spacing: 2px;
          font-size: 22px;
          margin: 0 30px;
          padding: 55px 0 0 0;
          height: 110px;
          text-shadow: 0 0 1px white, 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        p {
          color: #bbb;
          padding: 10px 5px;
          font-style: italic;
          margin: 0 30px;
          font-size: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.5);
        }
      }

      &.left_to_right{
        .info-box {
          -webkit-transform: translateX(-100%);
          -moz-transform: translateX(-100%);
          -ms-transform: translateX(-100%);
          -o-transform: translateX(-100%);
          transform: translateX(-100%);
        }

        &:hover {
          .img {
            -webkit-transform: rotate(-90deg);
            -moz-transform: rotate(-90deg);
            -ms-transform: rotate(-90deg);
            -o-transform: rotate(-90deg);
            transform: rotate(-90deg);
          }

          .info-box {
            opacity: 1;
            -webkit-transform: translateX(0);
            -moz-transform: translateX(0);
            -ms-transform: translateX(0);
            -o-transform: translateX(0);
            transform: translateX(0);
          }
        }
      }

      &.right_to_left{
        .info-box {
          -webkit-transform: translateX(100%);
          -moz-transform: translateX(100%);
          -ms-transform: translateX(100%);
          -o-transform: translateX(100%);
          transform: translateX(100%);
        }

        &:hover{
          .img {
            -webkit-transform: rotate(90deg);
            -moz-transform: rotate(90deg);
            -ms-transform: rotate(90deg);
            -o-transform: rotate(90deg);
            transform: rotate(90deg);
          }

          .info-box {
            opacity: 1;
            -webkit-transform: translateX(0);
            -moz-transform: translateX(0);
            -ms-transform: translateX(0);
            -o-transform: translateX(0);
            transform: translateX(0);
          }
        }
      }

      &.top_to_bottom{
        .info-box {
          -webkit-transform: translateY(-100%);
          -moz-transform: translateY(-100%);
          -ms-transform: translateY(-100%);
          -o-transform: translateY(-100%);
          transform: translateY(-100%);
        }

        &:hover{
          .img {
            -webkit-transform: rotate(-90deg);
            -moz-transform: rotate(-90deg);
            -ms-transform: rotate(-90deg);
            -o-transform: rotate(-90deg);
            transform: rotate(-90deg);
          }

          .info-box {
            opacity: 1;
            -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -ms-transform: translateY(0);
            -o-transform: translateY(0);
            transform: translateY(0);
          }
        }
      }

      &.bottom_to_top{
        .info-box {
          -webkit-transform: translateY(100%);
          -moz-transform: translateY(100%);
          -ms-transform: translateY(100%);
          -o-transform: translateY(100%);
          transform: translateY(100%);
        }

        &:hover{
          .img {
            -webkit-transform: rotate(90deg);
            -moz-transform: rotate(90deg);
            -ms-transform: rotate(90deg);
            -o-transform: rotate(90deg);
            transform: rotate(90deg);
          }

          .info-box {
            opacity: 1;
            -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -ms-transform: translateY(0);
            -o-transform: translateY(0);
            transform: translateY(0);
          }
        }
      }
    }

    &.effect3{
      .img {
        z-index: 11;
        -webkit-transition: all 0.35s ease-in-out;
        -moz-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;      

        &::before {
          position: absolute;
          display: block;
          content: '';
          width: 100%;
          height: 100%;
          border-radius: 50%;
          box-shadow: inset 0 0 0 16px rgba(255, 255, 255, 0.6), 0 1px 2px rgba(0, 0, 0, 0.3);
          -webkit-transition: all 0.35s ease-in-out;
          -moz-transition: all 0.35s ease-in-out;
          transition: all 0.35s ease-in-out;
        }
      }

      .info-box {
        background: #333333;
        opacity: 0;
        pointer-events: none;
        -webkit-transition: all 0.35s ease-in-out;
        -moz-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;

        h3 {
          color: #fff;
          text-transform: uppercase;
          position: relative;
          letter-spacing: 2px;
          font-size: 22px;
          margin: 0 30px;
          padding: 55px 0 0 0;
          height: 110px;
          text-shadow: 0 0 1px white, 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        p {
          color: #bbb;
          padding: 10px 5px;
          font-style: italic;
          margin: 0 30px;
          font-size: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.5);
        }
      }

      &.left_to_right{
        .img {
          -webkit-transform: scale(1) translateX(0);
          -moz-transform: scale(1) translateX(0);
          -ms-transform: scale(1) translateX(0);
          -o-transform: scale(1) translateX(0);
          transform: scale(1) translateX(0);
        }

        .info-box {
          -webkit-transform: translateX(-100%);
          -moz-transform: translateX(-100%);
          -ms-transform: translateX(-100%);
          -o-transform: translateX(-100%);
          transform: translateX(-100%);
        }

        &:hover {
          .img {
            -webkit-transform: scale(0.5) translateX(100%);
            -moz-transform: scale(0.5) translateX(100%);
            -ms-transform: scale(0.5) translateX(100%);
            -o-transform: scale(0.5) translateX(100%);
            transform: scale(0.5) translateX(100%);
          }

          .info-box {
            opacity: 1;
            -webkit-transform: translateX(0);
            -moz-transform: translateX(0);
            -ms-transform: translateX(0);
            -o-transform: translateX(0);
            transform: translateX(0);
          }
        }
      }

      &.right_to_left{
        .img {
          -webkit-transform: scale(1) translateX(0);
          -moz-transform: scale(1) translateX(0);
          -ms-transform: scale(1) translateX(0);
          -o-transform: scale(1) translateX(0);
          transform: scale(1) translateX(0);
        }

        .info-box {
          -webkit-transform: translateX(100%);
          -moz-transform: translateX(100%);
          -ms-transform: translateX(100%);
          -o-transform: translateX(100%);
          transform: translateX(100%);
        }

        &:hover {
          .img {
            -webkit-transform: scale(0.5) translateX(-100%);
            -moz-transform: scale(0.5) translateX(-100%);
            -ms-transform: scale(0.5) translateX(-100%);
            -o-transform: scale(0.5) translateX(-100%);
            transform: scale(0.5) translateX(-100%);
          }

          .info-box {
            opacity: 1;
            -webkit-transform: translateX(0);
            -moz-transform: translateX(0);
            -ms-transform: translateX(0);
            -o-transform: translateX(0);
            transform: translateX(0);
          }
        }
      }

      &.top_to_bottom{
        .img {
          -webkit-transform: scale(1) translateY(0);
          -moz-transform: scale(1) translateY(0);
          -ms-transform: scale(1) translateY(0);
          -o-transform: scale(1) translateY(0);
          transform: scale(1) translateY(0);
        }

        .info-box {
          -webkit-transform: translateY(-100%);
          -moz-transform: translateY(-100%);
          -ms-transform: translateY(-100%);
          -o-transform: translateY(-100%);
          transform: translateY(-100%);
        }

        &:hover {
          .img {
            -webkit-transform: scale(0.5) translateY(100%);
            -moz-transform: scale(0.5) translateY(100%);
            -ms-transform: scale(0.5) translateY(100%);
            -o-transform: scale(0.5) translateY(100%);
            transform: scale(0.5) translateY(100%);
          }

          .info-box {
            opacity: 1;
            -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -ms-transform: translateY(0);
            -o-transform: translateY(0);
            transform: translateY(0);
          }
        }
      }

      &.bottom_to_top{
        .img {
          -webkit-transform: scale(1) translateY(0);
          -moz-transform: scale(1) translateY(0);
          -ms-transform: scale(1) translateY(0);
          -o-transform: scale(1) translateY(0);
          transform: scale(1) translateY(0);
        }

        .info-box {
          -webkit-transform: translateY(100%);
          -moz-transform: translateY(100%);
          -ms-transform: translateY(100%);
          -o-transform: translateY(100%);
          transform: translateY(100%);
        }

        &:hover {
          .img {
            -webkit-transform: scale(0.5) translateY(-100%);
            -moz-transform: scale(0.5) translateY(-100%);
            -ms-transform: scale(0.5) translateY(-100%);
            -o-transform: scale(0.5) translateY(-100%);
            transform: scale(0.5) translateY(-100%);
          }

          .info-box {
            opacity: 1;
            -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -ms-transform: translateY(0);
            -o-transform: translateY(0);
            transform: translateY(0);
          }
        }
      }
    }
    
    &.effect4{
      .img {
        opacity: 1;
        -webkit-transition: all 0.4s ease-in-out;
        -moz-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;

        &::before {
          position: absolute;
          display: block;
          content: '';
          width: 100%;
          height: 100%;
          border-radius: 50%;
          box-shadow: inset 0 0 0 16px rgba(255, 255, 255, 0.6), 0 1px 2px rgba(0, 0, 0, 0.3);
          -webkit-transition: all 0.35s ease-in-out;
          -moz-transition: all 0.35s ease-in-out;
          transition: all 0.35s ease-in-out;
        }
      }

      .info-box {
        background: #333333;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        -webkit-transition: all 0.35s ease;
        -moz-transition: all 0.35s ease;
        transition: all 0.35s ease;

        h3 {
          color: #fff;
          text-transform: uppercase;
          position: relative;
          letter-spacing: 2px;
          font-size: 22px;
          margin: 0 30px;
          padding: 55px 0 0 0;
          height: 110px;
          text-shadow: 0 0 1px white, 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        p {
          color: #bbb;
          padding: 10px 5px;
          font-style: italic;
          margin: 0 30px;
          font-size: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.5);
          -webkit-transition: all 0.35s ease-in-out;
          -moz-transition: all 0.35s ease-in-out;
          transition: all 0.35s ease-in-out;
        }
      }

      &:hover {
        .img {
          opacity: 0;
          pointer-events: none;
        }

        .info-box {
          visibility: visible;
          opacity: 1;
        }
      }

      &.left_to_right{
        .img {
          -webkit-transform: translateX(0);
          -moz-transform: translateX(0);
          -ms-transform: translateX(0);
          -o-transform: translateX(0);
          transform: translateX(0);
        }

        .info-box {
          -webkit-transform: translateX(-100%);
          -moz-transform: translateX(-100%);
          -ms-transform: translateX(-100%);
          -o-transform: translateX(-100%);
          transform: translateX(-100%);
        }

        &:hover {
          .img {
            -webkit-transform: translateX(100%);
            -moz-transform: translateX(100%);
            -ms-transform: translateX(100%);
            -o-transform: translateX(100%);
            transform: translateX(100%);
          }

          .info-box {
            -webkit-transform: translateX(0);
            -moz-transform: translateX(0);
            -ms-transform: translateX(0);
            -o-transform: translateX(0);
            transform: translateX(0);
          }
        }
      }

      &.right_to_left{
        .img {
          -webkit-transform: translateX(0);
          -moz-transform: translateX(0);
          -ms-transform: translateX(0);
          -o-transform: translateX(0);
          transform: translateX(0);
        }

        .info-box {
          -webkit-transform: translateX(100%);
          -moz-transform: translateX(100%);
          -ms-transform: translateX(100%);
          -o-transform: translateX(100%);
          transform: translateX(100%);
        }

        &:hover {
          .img {
            -webkit-transform: translateX(-100%);
            -moz-transform: translateX(-100%);
            -ms-transform: translateX(-100%);
            -o-transform: translateX(-100%);
            transform: translateX(-100%);
          }

          .info-box {
            -webkit-transform: translateX(0);
            -moz-transform: translateX(0);
            -ms-transform: translateX(0);
            -o-transform: translateX(0);
            transform: translateX(0);
          }
        }
      }

      &.top_to_bottom{
        .img {
          -webkit-transform: translateY(0);
          -moz-transform: translateY(0);
          -ms-transform: translateY(0);
          -o-transform: translateY(0);
          transform: translateY(0);
        }

        .info-box {
          -webkit-transform: translateY(100%);
          -moz-transform: translateY(100%);
          -ms-transform: translateY(100%);
          -o-transform: translateY(100%);
          transform: translateY(100%);
        }

        &:hover {
          .img {
            -webkit-transform: translateY(-100%);
            -moz-transform: translateY(-100%);
            -ms-transform: translateY(-100%);
            -o-transform: translateY(-100%);
            transform: translateY(-100%);
          }

          .info-box {
            -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -ms-transform: translateY(0);
            -o-transform: translateY(0);
            transform: translateY(0);
          }
        }
      }

      &.bottom_to_top{
        .img {
          -webkit-transform: translateY(0);
          -moz-transform: translateY(0);
          -ms-transform: translateY(0);
          -o-transform: translateY(0);
          transform: translateY(0);
        }

        .info-box {
          -webkit-transform: translateY(-100%);
          -moz-transform: translateY(-100%);
          -ms-transform: translateY(-100%);
          -o-transform: translateY(-100%);
          transform: translateY(-100%);
        }

        &:hover {
          .img {
            -webkit-transform: translateY(100%);
            -moz-transform: translateY(100%);
            -ms-transform: translateY(100%);
            -o-transform: translateY(100%);
            transform: translateY(100%);
          }

          .info-box {
            -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -ms-transform: translateY(0);
            -o-transform: translateY(0);
            transform: translateY(0);
          }
        }
      }
    }
    
    &.effect5{
      -webkit-perspective: 900px;
      -moz-perspective: 900px;
      perspective: 900px;  

    .img {
        &::before {
          position: absolute;
          display: block;
          content: '';
          width: 100%;
          height: 100%;
          border-radius: 50%;
          box-shadow: inset 0 0 0 16px rgba(255, 255, 255, 0.6), 0 1px 2px rgba(0, 0, 0, 0.3);
          -webkit-transition: all 0.35s ease-in-out;
          -moz-transition: all 0.35s ease-in-out;
          transition: all 0.35s ease-in-out;
        }
      }

      .info-box {
        -webkit-transition: all 0.35s ease-in-out;
        -moz-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        -ms-transform-style: preserve-3d;
        -o-transform-style: preserve-3d;
        transform-style: preserve-3d;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        background: #333333;
        background: rgba(0, 0, 0, 0.6);
        -webkit-transform: rotate3d(0, 1, 0, 180deg);
        -moz-transform: rotate3d(0, 1, 0, 180deg);
        -ms-transform: rotate3d(0, 1, 0, 180deg);
        -o-transform: rotate3d(0, 1, 0, 180deg);
        transform: rotate3d(0, 1, 0, 180deg);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        visibility: hidden;

        h3 {
          color: #fff;
          text-transform: uppercase;
          position: relative;
          letter-spacing: 2px;
          font-size: 22px;
          margin: 0 30px;
          padding: 55px 0 0 0;
          height: 110px;
          text-shadow: 0 0 1px white, 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        p {
          color: #bbb;
          padding: 10px 5px;
          font-style: italic;
          margin: 0 30px;
          font-size: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.5);
        }
      }    

      &:hover {
        .info-box {
          -webkit-transform: rotate3d(0, 1, 0, 0deg);
          -moz-transform: rotate3d(0, 1, 0, 0deg);
          -ms-transform: rotate3d(0, 1, 0, 0deg);
          -o-transform: rotate3d(0, 1, 0, 0deg);
          transform: rotate3d(0, 1, 0, 0deg);
          visibility: visible;
        }
      }
    }
    
    &.effect6{
      .img {
        opacity: 1;
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);
        -webkit-transition: all 0.35s ease-in-out;
        -moz-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;  

        &::before {
          position: absolute;
          display: block;
          content: '';
          width: 100%;
          height: 100%;
          border-radius: 50%;
          box-shadow: inset 0 0 0 16px rgba(255, 255, 255, 0.6), 0 1px 2px rgba(0, 0, 0, 0.3);
          -webkit-transition: all 0.35s ease-in-out;
          -moz-transition: all 0.35s ease-in-out;
          transition: all 0.35s ease-in-out;
        }
      }

      .info-box {
        background: #333333;
        opacity: 0;
        -webkit-transition: all 0.35s ease-in-out;
        -moz-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;

        h3 {
          color: #fff;
          text-transform: uppercase;
          position: relative;
          letter-spacing: 2px;
          font-size: 22px;
          margin: 0 30px;
          padding: 55px 0 0 0;
          height: 110px;
          text-shadow: 0 0 1px white, 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        p {
          color: #bbb;
          padding: 10px 5px;
          font-style: italic;
          margin: 0 30px;
          font-size: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.5);
        }
      }

      &.scale_up{
        .info-box {        
          -webkit-transform: scale(0.5);
          -moz-transform: scale(0.5);
          -ms-transform: scale(0.5);
          -o-transform: scale(0.5);
          transform: scale(0.5);
        }

        &:hover {
          .img {
            opacity: 0;
            -webkit-transform: scale(1.5);
            -moz-transform: scale(1.5);
            -ms-transform: scale(1.5);
            -o-transform: scale(1.5);
            transform: scale(1.5);
          }

          .info-box {
            opacity: 1;
            -webkit-transform: scale(1);
            -moz-transform: scale(1);
            -ms-transform: scale(1);
            -o-transform: scale(1);
            transform: scale(1);
          }
        }
      }

      &.scale_down{
        .info-box {
          -webkit-transform: scale(1.5);
          -moz-transform: scale(1.5);
          -ms-transform: scale(1.5);
          -o-transform: scale(1.5);
          transform: scale(1.5);
        }

        &:hover {
          .img {
            opacity: 0;
            -webkit-transform: scale(0.5);
            -moz-transform: scale(0.5);
            -ms-transform: scale(0.5);
            -o-transform: scale(0.5);
            transform: scale(0.5);
          }

          .info-box {
            opacity: 1;
            -webkit-transform: scale(1);
            -moz-transform: scale(1);
            -ms-transform: scale(1);
            -o-transform: scale(1);
            transform: scale(1);
          }
        }
      }

      &.scale_down_up{
        .info-box {
          -webkit-transform: scale(0.5);
          -moz-transform: scale(0.5);
          -ms-transform: scale(0.5);
          -o-transform: scale(0.5);
          transform: scale(0.5);
          -webkit-transition: all 0.35s ease-in-out 0.2s;
          -moz-transition: all 0.35s ease-in-out 0.2s;
          transition: all 0.35s ease-in-out 0.2s;
        }

        &:hover {
          .img {
            opacity: 0;
            -webkit-transform: scale(0.5);
            -moz-transform: scale(0.5);
            -ms-transform: scale(0.5);
            -o-transform: scale(0.5);
            transform: scale(0.5);
          }

          .info-box {
            opacity: 1;
            -webkit-transform: scale(1);
            -moz-transform: scale(1);
            -ms-transform: scale(1);
            -o-transform: scale(1);
            transform: scale(1);
          }
        }
      }
    }
    
    &.effect7{
      .img {
        opacity: 1;
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);
        -webkit-transition: all 0.35s ease-out;
        -moz-transition: all 0.35s ease-out;
        transition: all 0.35s ease-out;  

        &::before {
          position: absolute;
          display: block;
          content: '';
          width: 100%;
          height: 100%;
          border-radius: 50%;
          box-shadow: inset 0 0 0 16px rgba(255, 255, 255, 0.6), 0 1px 2px rgba(0, 0, 0, 0.3);
          -webkit-transition: all 0.35s ease-in-out;
          -moz-transition: all 0.35s ease-in-out;
          transition: all 0.35s ease-in-out;
        }
      }

      .info-box {
        background: #333333;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        -webkit-transition: all 0.35s ease 0.2s;
        -moz-transition: all 0.35s ease 0.2s;
        transition: all 0.35s ease 0.2s;

        h3 {
          color: #fff;
          text-transform: uppercase;
          position: relative;
          letter-spacing: 2px;
          font-size: 22px;
          margin: 0 30px;
          padding: 55px 0 0 0;
          height: 110px;
          text-shadow: 0 0 1px white, 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        p {
          color: #bbb;
          padding: 10px 5px;
          font-style: italic;
          margin: 0 30px;
          font-size: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.5);
        }
      }

      &:hover{
        .img {
          opacity: 0;
          -webkit-transform: scale(0.5);
          -moz-transform: scale(0.5);
          -ms-transform: scale(0.5);
          -o-transform: scale(0.5);
          transform: scale(0.5);
        }

        .info-box {
          visibility: visible;
          opacity: 1;
        }
      }

      &.left_to_right{
        .info-box {
          -webkit-transform: translateX(-100%);
          -moz-transform: translateX(-100%);
          -ms-transform: translateX(-100%);
          -o-transform: translateX(-100%);
          transform: translateX(-100%);
        }

        &:hover {
          .info-box {
            -webkit-transform: translateX(0);
            -moz-transform: translateX(0);
            -ms-transform: translateX(0);
            -o-transform: translateX(0);
            transform: translateX(0);
          }
        }
      }

      &.right_to_left{
        .info-box {
          -webkit-transform: translateX(100%);
          -moz-transform: translateX(100%);
          -ms-transform: translateX(100%);
          -o-transform: translateX(100%);
          transform: translateX(100%);
        }

        &:hover {
          .info-box {
            -webkit-transform: translateX(0);
            -moz-transform: translateX(0);
            -ms-transform: translateX(0);
            -o-transform: translateX(0);
            transform: translateX(0);
          }
        }
      }

      &.top_to_bottom{
        .info-box {
          -webkit-transform: translateY(100%);
          -moz-transform: translateY(100%);
          -ms-transform: translateY(100%);
          -o-transform: translateY(100%);
          transform: translateY(100%);
        }

        &:hover {
          .info-box {
            -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -ms-transform: translateY(0);
            -o-transform: translateY(0);
            transform: translateY(0);
          }
        }
      }

      &.bottom_to_top{
        .info-box {
          -webkit-transform: translateY(-100%);
          -moz-transform: translateY(-100%);
          -ms-transform: translateY(-100%);
          -o-transform: translateY(-100%);
          transform: translateY(-100%);
        }

        &:hover {
          .info-box {
            -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -ms-transform: translateY(0);
            -o-transform: translateY(0);
            transform: translateY(0);
          }
        }
      }
    }
    
    &.effect8{
      .img-container {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        border-radius: 50%;
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
      }

      .img {
        opacity: 1;
        -webkit-transition: all 0.3s ease-in-out 0.3s;
        -moz-transition: all 0.3s ease-in-out 0.3s;
        transition: all 0.3s ease-in-out 0.3s;     

        &::before {
          position: absolute;
          display: block;
          content: '';
          width: 100%;
          height: 100%;
          border-radius: 50%;
          box-shadow: inset 0 0 0 16px rgba(255, 255, 255, 0.6), 0 1px 2px rgba(0, 0, 0, 0.3);
          -webkit-transition: all 0.35s ease-in-out;
          -moz-transition: all 0.35s ease-in-out;
          transition: all 0.35s ease-in-out;
        }
      }

      .info-container {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
        -webkit-transition: all 0.3s ease-in-out 0.3s;
        -moz-transition: all 0.3s ease-in-out 0.3s;
        transition: all 0.3s ease-in-out 0.3s;
      }

      .info-box {
        width: 100%;
        height: 100%;
        background: #333333;
        pointer-events: none;
        -webkit-transform: scale(0.5);
        -moz-transform: scale(0.5);
        -ms-transform: scale(0.5);
        -o-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transition: all 0.35s ease-in-out 0.6s;
        -moz-transition: all 0.35s ease-in-out 0.6s;
        transition: all 0.35s ease-in-out 0.6s;

        h3 {
          color: #fff;
          text-transform: uppercase;
          position: relative;
          letter-spacing: 2px;
          font-size: 22px;
          margin: 0 30px;
          padding: 55px 0 0 0;
          height: 110px;
          text-shadow: 0 0 1px white, 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        p {
          color: #bbb;
          padding: 10px 5px;
          font-style: italic;
          margin: 0 30px;
          font-size: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.5);
        }
      }
      &:hover{
        .img-container {
          pointer-events: none;
          -webkit-transform: scale(0.5);
          -moz-transform: scale(0.5);
          -ms-transform: scale(0.5);
          -o-transform: scale(0.5);
          transform: scale(0.5);
        }

        .img {
          opacity: 0;
          pointer-events: none;
        }

        .info-container {
          opacity: 1;
        }

        .info-box {
          -webkit-transform: scale(1);
          -moz-transform: scale(1);
          -ms-transform: scale(1);
          -o-transform: scale(1);
          transform: scale(1);
        }
      }

      &.left_to_right{
        .img {
          -webkit-transform: translateX(0);
          -moz-transform: translateX(0);
          -ms-transform: translateX(0);
          -o-transform: translateX(0);
          transform: translateX(0);
        }

        .info-container {
          -webkit-transform: translateX(100%);
          -moz-transform: translateX(100%);
          -ms-transform: translateX(100%);
          -o-transform: translateX(100%);
          transform: translateX(100%);
        }

        &:hover {
          .img {
            -webkit-transform: translateX(-100%);
            -moz-transform: translateX(-100%);
            -ms-transform: translateX(-100%);
            -o-transform: translateX(-100%);
            transform: translateX(-100%);
          }

          .info-container {
            -webkit-transform: translateX(0);
            -moz-transform: translateX(0);
            -ms-transform: translateX(0);
            -o-transform: translateX(0);
            transform: translateX(0);
          }
        }
      }

      &.right_to_left{
        .img {
          -webkit-transform: translateX(0);
          -moz-transform: translateX(0);
          -ms-transform: translateX(0);
          -o-transform: translateX(0);
          transform: translateX(0);
        }

        .info-container {
          -webkit-transform: translateX(-100%);
          -moz-transform: translateX(-100%);
          -ms-transform: translateX(-100%);
          -o-transform: translateX(-100%);
          transform: translateX(-100%);
        }

        &:hover {
          .img {
            -webkit-transform: translateX(100%);
            -moz-transform: translateX(100%);
            -ms-transform: translateX(100%);
            -o-transform: translateX(100%);
            transform: translateX(100%);
          }

          .info-container {
            -webkit-transform: translateX(0);
            -moz-transform: translateX(0);
            -ms-transform: translateX(0);
            -o-transform: translateX(0);
            transform: translateX(0);
          }
        }
      }

      &.top_to_bottom{
        .img {
          -webkit-transform: translateY(0);
          -moz-transform: translateY(0);
          -ms-transform: translateY(0);
          -o-transform: translateY(0);
          transform: translateY(0);
        }

        .info-container {
          -webkit-transform: translateY(-100%);
          -moz-transform: translateY(-100%);
          -ms-transform: translateY(-100%);
          -o-transform: translateY(-100%);
          transform: translateY(-100%);
        }

        &:hover {
          .img {
            -webkit-transform: translateY(100%);
            -moz-transform: translateY(100%);
            -ms-transform: translateY(100%);
            -o-transform: translateY(100%);
            transform: translateY(100%);
          }

          .info-container {
            -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -ms-transform: translateY(0);
            -o-transform: translateY(0);
            transform: translateY(0);
          }
        }
      }

      &.bottom_to_top{
        .img {
          -webkit-transform: translateY(0);
          -moz-transform: translateY(0);
          -ms-transform: translateY(0);
          -o-transform: translateY(0);
          transform: translateY(0);
        }

        .info-container {
          -webkit-transform: translateY(100%);
          -moz-transform: translateY(100%);
          -ms-transform: translateY(100%);
          -o-transform: translateY(100%);
          transform: translateY(100%);
        }

        &:hover {
          .img {
            -webkit-transform: translateY(-100%);
            -moz-transform: translateY(-100%);
            -ms-transform: translateY(-100%);
            -o-transform: translateY(-100%);
            transform: translateY(-100%);
          }

          .info-container {
            -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -ms-transform: translateY(0);
            -o-transform: translateY(0);
            transform: translateY(0);
          }
        }
      }
    }
    
    &.effect9{
      .img {
        opacity: 1;
        -webkit-transition: all 0.35s ease-out;
        -moz-transition: all 0.35s ease-out;
        transition: all 0.35s ease-out; 

        &::before {
          position: absolute;
          display: block;
          content: '';
          width: 100%;
          height: 100%;
          border-radius: 50%;
          box-shadow: inset 0 0 0 16px rgba(255, 255, 255, 0.6), 0 1px 2px rgba(0, 0, 0, 0.3);
          -webkit-transition: all 0.35s ease-in-out;
          -moz-transition: all 0.35s ease-in-out;
          transition: all 0.35s ease-in-out;
        }
      }

      .info-box {
        background: #333333;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        -webkit-transform: scale(0.5);
        -moz-transform: scale(0.5);
        -ms-transform: scale(0.5);
        -o-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transition: all 0.35s ease 0.2s;
        -moz-transition: all 0.35s ease 0.2s;
        transition: all 0.35s ease 0.2s;

        h3 {
          color: #fff;
          text-transform: uppercase;
          position: relative;
          letter-spacing: 2px;
          font-size: 22px;
          margin: 0 30px;
          padding: 55px 0 0 0;
          height: 110px;
          text-shadow: 0 0 1px white, 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        p {
          color: #bbb;
          padding: 10px 5px;
          font-style: italic;
          margin: 0 30px;
          font-size: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.5);
        }
      }

      &:hover {
        .img {
          opacity: 0;
          pointer-events: none;
          -webkit-transform: scale(0.5);
          -moz-transform: scale(0.5);
          -ms-transform: scale(0.5);
          -o-transform: scale(0.5);
          transform: scale(0.5);
        }

        .info-box {
          visibility: visible;
          opacity: 1;
          -webkit-transform: scale(1);
          -moz-transform: scale(1);
          -ms-transform: scale(1);
          -o-transform: scale(1);
          transform: scale(1);
        }
      }

      &.left_to_right{
        .img {
          -webkit-transform: translateX(0) rotate(0);
          -moz-transform: translateX(0) rotate(0);
          -ms-transform: translateX(0) rotate(0);
          -o-transform: translateX(0) rotate(0);
          transform: translateX(0) rotate(0);
        }

        &:hover {
          .img {
            -webkit-transform: translateX(100%) rotate(180deg);
            -moz-transform: translateX(100%) rotate(180deg);
            -ms-transform: translateX(100%) rotate(180deg);
            -o-transform: translateX(100%) rotate(180deg);
            transform: translateX(100%) rotate(180deg);
          }
        }
      }

      &.right_to_left{
        .img {
          -webkit-transform: translateX(0) rotate(0);
          -moz-transform: translateX(0) rotate(0);
          -ms-transform: translateX(0) rotate(0);
          -o-transform: translateX(0) rotate(0);
          transform: translateX(0) rotate(0);
        }

        &:hover {
          .img {          
            -webkit-transform: translateX(-100%) rotate(-180deg);
            -moz-transform: translateX(-100%) rotate(-180deg);
            -ms-transform: translateX(-100%) rotate(-180deg);
            -o-transform: translateX(-100%) rotate(-180deg);
            transform: translateX(-100%) rotate(-180deg);
          }
        }
      }

      &.top_to_bottom{
        .img {
          -webkit-transform: translateY(0);
          -moz-transform: translateY(0);
          -ms-transform: translateY(0);
          -o-transform: translateY(0);
          transform: translateY(0);
        }

        &:hover {
          .img {
            -webkit-transform: translateY(-100%);
            -moz-transform: translateY(-100%);
            -ms-transform: translateY(-100%);
            -o-transform: translateY(-100%);
            transform: translateY(-100%);
          }
        }
      }

      &.bottom_to_top{
        .img {
          -webkit-transform: translateY(0);
          -moz-transform: translateY(0);
          -ms-transform: translateY(0);
          -o-transform: translateY(0);
          transform: translateY(0);
        }

        &:hover {
          .img {
            -webkit-transform: translateY(100%);
            -moz-transform: translateY(100%);
            -ms-transform: translateY(100%);
            -o-transform: translateY(100%);
            transform: translateY(100%);
          }
        }
      }
    }
    
    &.effect10{
      .img {
        z-index: 11;
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);
        -webkit-transition: all 0.35s ease-in-out;
        -moz-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;    

        &::before {
          position: absolute;
          display: block;
          content: '';
          width: 100%;
          height: 100%;
          border-radius: 50%;
          box-shadow: inset 0 0 0 16px rgba(255, 255, 255, 0.6), 0 1px 2px rgba(0, 0, 0, 0.3);
          -webkit-transition: all 0.35s ease-in-out;
          -moz-transition: all 0.35s ease-in-out;
          transition: all 0.35s ease-in-out;
        }
      }

      .info-box {
        background: #333333;
        opacity: 0;
        -webkit-transform: scale(0);
        -moz-transform: scale(0);
        -ms-transform: scale(0);
        -o-transform: scale(0);
        transform: scale(0);
        -webkit-transition: all 0.35s ease-in-out;
        -moz-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;

        h3 {
          color: #fff;
          text-transform: uppercase;
          position: relative;
          letter-spacing: 2px;
          font-size: 22px;
          text-shadow: 0 0 1px white, 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        p {
          color: #bbb;
          font-style: italic;
          font-size: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.5);
        }
      }

      &:hover {
        .info-box {
          visibility: visible;
          opacity: 1;
          -webkit-transform: scale(1);
          -moz-transform: scale(1);
          -ms-transform: scale(1);
          -o-transform: scale(1);
          transform: scale(1);
        }
      }

      &.top_to_bottom{
        .info-box {
          justify-content: flex-start;

          h3 {
            margin: 0 30px;
            padding: 25px 0 0 0;
          }

          p {
            margin: 0 20px;
            padding: 5px;
          }
        }

        &:hover {
          .img {
            -webkit-transform: translateY(25%) scale(0.4);
            -moz-transform: translateY(25%) scale(0.4);
            -ms-transform: translateY(25%) scale(0.4);
            -o-transform: translateY(25%) scale(0.4);
            transform: translateY(25%) scale(0.4);
          }
        }
      }

      &.bottom_to_top{
        .info-box {
          h3 {
            margin: 50% 30px 0;
          }

          p {
            margin: 0 30px;
            padding: 5px;
          }
        }

        &:hover {
          .img {
            -webkit-transform: translateY(-25%) scale(0.4);
            -moz-transform: translateY(-25%) scale(0.4);
            -ms-transform: translateY(-25%) scale(0.4);
            -o-transform: translateY(-25%) scale(0.45);
            transform: translateY(-25%) scale(0.4);
          }
        }
      }
    }
    
    &.effect11{
      -webkit-perspective: 900px;
      -moz-perspective: 900px;
      perspective: 900px;

      .img {
        opacity: 1;
        -webkit-transform-origin: 50% 50%;
        -moz-transform-origin: 50% 50%;
        -ms-transform-origin: 50% 50%;
        -o-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        -webkit-transition: all 0.35s ease-in-out;
        -moz-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;

        &::before {
          position: absolute;
          display: block;
          content: '';
          width: 100%;
          height: 100%;
          border-radius: 50%;
          box-shadow: inset 0 0 0 16px rgba(255, 255, 255, 0.6), 0 1px 2px rgba(0, 0, 0, 0.3);
          -webkit-transition: all 0.35s ease-in-out;
          -moz-transition: all 0.35s ease-in-out;
          transition: all 0.35s ease-in-out;
        }
      }

      .info-box {
        background: #333333;
        opacity: 0;
        visibility: hidden;
        -webkit-transition: all 0.35s ease 0.35s;
        -moz-transition: all 0.35s ease 0.35s;
        transition: all 0.35s ease 0.35s;

        h3 {
          color: #fff;
          text-transform: uppercase;
          position: relative;
          letter-spacing: 2px;
          font-size: 22px;
          margin: 0 30px;
          padding: 55px 0 0 0;
          height: 110px;
          text-shadow: 0 0 1px white, 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        p {
          color: #bbb;
          padding: 10px 5px;
          font-style: italic;
          margin: 0 30px;
          font-size: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.5);
        }
      }

      &:hover {
        .img {
          opacity: 0;
        }

        .info-box {
          visibility: visible;
          opacity: 1;
        }
      }


      &.left_to_right{
        .img {
          -webkit-transform: translateZ(0) rotateY(0);
          -moz-transform: translateZ(0) rotateY(0);
          -ms-transform: translateZ(0) rotateY(0);
          -o-transform: translateZ(0) rotateY(0);
          transform: translateZ(0) rotateY(0);
        }

        .info-box {
          -webkit-transform: translateZ(-1000px) rotateY(-90deg);
          -moz-transform: translateZ(-1000px) rotateY(-90deg);
          -ms-transform: translateZ(-1000px) rotateY(-90deg);
          -o-transform: translateZ(-1000px) rotateY(-90deg);
          transform: translateZ(-1000px) rotateY(-90deg);
        }

        &:hover {
          .img {
            -webkit-transform: translateZ(-1000px) rotateY(90deg);
            -moz-transform: translateZ(-1000px) rotateY(90deg);
            -ms-transform: translateZ(-1000px) rotateY(90deg);
            -o-transform: translateZ(-1000px) rotateY(90deg);
            transform: translateZ(-1000px) rotateY(90deg);
          }

          .info-box {
            -webkit-transform: translateZ(0) rotateY(0);
            -moz-transform: translateZ(0) rotateY(0);
            -ms-transform: translateZ(0) rotateY(0);
            -o-transform: translateZ(0) rotateY(0);
            transform: translateZ(0) rotateY(0);
          }
        }
      }

      &.right_to_left{
        .img {
          -webkit-transform: translateZ(0) rotateY(0);
          -moz-transform: translateZ(0) rotateY(0);
          -ms-transform: translateZ(0) rotateY(0);
          -o-transform: translateZ(0) rotateY(0);
          transform: translateZ(0) rotateY(0);
        }

        .info-box {
          -webkit-transform: translateZ(-1000px) rotateY(90deg);
          -moz-transform: translateZ(-1000px) rotateY(90deg);
          -ms-transform: translateZ(-1000px) rotateY(90deg);
          -o-transform: translateZ(-1000px) rotateY(90deg);
          transform: translateZ(-1000px) rotateY(90deg);
        }

        &:hover {
          .img {
            -webkit-transform: translateZ(-1000px) rotateY(-90deg);
            -moz-transform: translateZ(-1000px) rotateY(-90deg);
            -ms-transform: translateZ(-1000px) rotateY(-90deg);
            -o-transform: translateZ(-1000px) rotateY(-90deg);
            transform: translateZ(-1000px) rotateY(-90deg);
          }

          .info-box {
            -webkit-transform: translateZ(0) rotateY(0);
            -moz-transform: translateZ(0) rotateY(0);
            -ms-transform: translateZ(0) rotateY(0);
            -o-transform: translateZ(0) rotateY(0);
            transform: translateZ(0) rotateY(0);
          }
        }
      }

      &.top_to_bottom{
        .img {
          -webkit-transform: translateZ(0) rotateX(0);
          -moz-transform: translateZ(0) rotateX(0);
          -ms-transform: translateZ(0) rotateX(0);
          -o-transform: translateZ(0) rotateX(0);
          transform: translateZ(0) rotateX(0);
        }

        .info-box {
          -webkit-transform: translateZ(-1000px) rotateX(90deg);
          -moz-transform: translateZ(-1000px) rotateX(90deg);
          -ms-transform: translateZ(-1000px) rotateX(90deg);
          -o-transform: translateZ(-1000px) rotateX(90deg);
          transform: translateZ(-1000px) rotateX(90deg);
        }

        &:hover {
          .img {
            -webkit-transform: translateZ(-1000px) rotateX(-90deg);
            -moz-transform: translateZ(-1000px) rotateX(-90deg);
            -ms-transform: translateZ(-1000px) rotateX(-90deg);
            -o-transform: translateZ(-1000px) rotateX(-90deg);
            transform: translateZ(-1000px) rotateX(-90deg);
          }

          .info-box {
            -webkit-transform: translateZ(0) rotateX(0);
            -moz-transform: translateZ(0) rotateX(0);
            -ms-transform: translateZ(0) rotateX(0);
            -o-transform: translateZ(0) rotateX(0);
            transform: translateZ(0) rotateX(0);
          }
        }
      }

      &.bottom_to_top{
        .img {
          -webkit-transform: translateZ(0) rotateX(0);
          -moz-transform: translateZ(0) rotateX(0);
          -ms-transform: translateZ(0) rotateX(0);
          -o-transform: translateZ(0) rotateX(0);
          transform: translateZ(0) rotateX(0);
        }

        .info-box {
          -webkit-transform: translateZ(-1000px) rotateX(-90deg);
          -moz-transform: translateZ(-1000px) rotateX(-90deg);
          -ms-transform: translateZ(-1000px) rotateX(-90deg);
          -o-transform: translateZ(-1000px) rotateX(-90deg);
          transform: translateZ(-1000px) rotateX(-90deg);
        }

        &:hover {
          .img {
            -webkit-transform: translateZ(-1000px) rotateX(90deg);
            -moz-transform: translateZ(-1000px) rotateX(90deg);
            -ms-transform: translateZ(-1000px) rotateX(90deg);
            -o-transform: translateZ(-1000px) rotateX(90deg);
            transform: translateZ(-1000px) rotateX(90deg);
          }

          .info-box {
            -webkit-transform: translateZ(0) rotateX(0);
            -moz-transform: translateZ(0) rotateX(0);
            -ms-transform: translateZ(0) rotateX(0);
            -o-transform: translateZ(0) rotateX(0);
            transform: translateZ(0) rotateX(0);
          }
        }
      }
    }
    
    &.effect12{
      .img {
        opacity: 1;
        -webkit-transition: all 0.35s ease-in-out;
        -moz-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;  

        &::before {
          position: absolute;
          display: block;
          content: '';
          width: 100%;
          height: 100%;
          border-radius: 50%;
          box-shadow: inset 0 0 0 16px rgba(255, 255, 255, 0.6), 0 1px 2px rgba(0, 0, 0, 0.3);
          -webkit-transition: all 0.35s ease-in-out;
          -moz-transition: all 0.35s ease-in-out;
          transition: all 0.35s ease-in-out;
        }
      }

      .info-box {
          background: #333333;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          -webkit-transform: scale(0.5);
          -moz-transform: scale(0.5);
          -ms-transform: scale(0.5);
          -o-transform: scale(0.5);
          transform: scale(0.5);
          -webkit-transition: all 0.35s ease-in-out;
          -moz-transition: all 0.35s ease-in-out;
          transition: all 0.35s ease-in-out;

        h3 {
          color: #fff;
          text-transform: uppercase;
          position: relative;
          letter-spacing: 2px;
          font-size: 22px;
          margin: 0 30px;
          padding: 55px 0 0 0;
          height: 110px;
          text-shadow: 0 0 1px white, 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        p {
          color: #bbb;
          padding: 10px 5px;
          font-style: italic;
          margin: 0 30px;
          font-size: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.5);
        }
      }

      &:hover {
        .img {
          opacity: 0;
          pointer-events: none;
        }

        .info-box {
          opacity: 1;
          visibility: visible;
        }
      }

      &.left_to_right{
        .img {
          -webkit-transform: translateX(0) rotate(0);
          -moz-transform: translateX(0) rotate(0);
          -ms-transform: translateX(0) rotate(0);
          -o-transform: translateX(0) rotate(0);
          transform: translateX(0) rotate(0);
        }

        .info-box {
          -webkit-transform: translateX(100%) rotate(180deg);
          -moz-transform: translateX(100%) rotate(180deg);
          -ms-transform: translateX(100%) rotate(180deg);
          -o-transform: translateX(100%) rotate(180deg);
          transform: translateX(100%) rotate(180deg);
        }

        &:hover {
          .img {
            -webkit-transform: translateX(100%) rotate(180deg);
            -moz-transform: translateX(100%) rotate(180deg);
            -ms-transform: translateX(100%) rotate(180deg);
            -o-transform: translateX(100%) rotate(180deg);
            transform: translateX(100%) rotate(180deg);
          }

          .info-box {
            -webkit-transform: translateX(0) rotate(0);
            -moz-transform: translateX(0) rotate(0);
            -ms-transform: translateX(0) rotate(0);
            -o-transform: translateX(0) rotate(0);
            transform: translateX(0) rotate(0);
            -webkit-transition-delay: 0.4s;
            -moz-transition-delay: 0.4s;
            transition-delay: 0.4s;
          }
        }
      }

      &.right_to_left{
        .img {
          -webkit-transform: translateX(0) rotate(0);
          -moz-transform: translateX(0) rotate(0);
          -ms-transform: translateX(0) rotate(0);
          -o-transform: translateX(0) rotate(0);
          transform: translateX(0) rotate(0);
        }

        .info-box {
          -webkit-transform: translateX(-100%) rotate(-180deg);
          -moz-transform: translateX(-100%) rotate(-180deg);
          -ms-transform: translateX(-100%) rotate(-180deg);
          -o-transform: translateX(-100%) rotate(-180deg);
          transform: translateX(-100%) rotate(-180deg);
        }

        &:hover {
          .img {
            -webkit-transform: translateX(-100%) rotate(-180deg);
            -moz-transform: translateX(-100%) rotate(-180deg);
            -ms-transform: translateX(-100%) rotate(-180deg);
            -o-transform: translateX(-100%) rotate(-180deg);
            transform: translateX(-100%) rotate(-180deg);
          }

          .info-box {
            -webkit-transform: translateX(0) rotate(0);
            -moz-transform: translateX(0) rotate(0);
            -ms-transform: translateX(0) rotate(0);
            -o-transform: translateX(0) rotate(0);
            transform: translateX(0) rotate(0);
            -webkit-transition-delay: 0.4s;
            -moz-transition-delay: 0.4s;
            transition-delay: 0.4s;
          }
        }
      }

      &.top_to_bottom{
        .img {
          -webkit-transform: translateY(0) rotate(0);
          -moz-transform: translateY(0) rotate(0);
          -ms-transform: translateY(0) rotate(0);
          -o-transform: translateY(0) rotate(0);
          transform: translateY(0) rotate(0);
        }

        .info-box {
          -webkit-transform: translateY(-100%) rotate(-180deg);
          -moz-transform: translateY(-100%) rotate(-180deg);
          -ms-transform: translateY(-100%) rotate(-180deg);
          -o-transform: translateY(-100%) rotate(-180deg);
          transform: translateY(-100%) rotate(-180deg);
        }

        &:hover {
          .img {
            -webkit-transform: translateY(-100%) rotate(-180deg);
            -moz-transform: translateY(-100%) rotate(-180deg);
            -ms-transform: translateY(-100%) rotate(-180deg);
            -o-transform: translateY(-100%) rotate(-180deg);
            transform: translateY(-100%) rotate(-180deg);
          }

          .info-box {
            -webkit-transform: translateY(0) rotate(0);
            -moz-transform: translateY(0) rotate(0);
            -ms-transform: translateY(0) rotate(0);
            -o-transform: translateY(0) rotate(0);
            transform: translateY(0) rotate(0);
            -webkit-transition-delay: 0.4s;
            -moz-transition-delay: 0.4s;
            transition-delay: 0.4s;
          }
        }
      }

      &.bottom_to_top{
        .img {
          -webkit-transform: translateY(0) rotate(0);
          -moz-transform: translateY(0) rotate(0);
          -ms-transform: translateY(0) rotate(0);
          -o-transform: translateY(0) rotate(0);
          transform: translateY(0) rotate(0);
        }

        .info-box {
          -webkit-transform: translateY(100%) rotate(180deg);
          -moz-transform: translateY(100%) rotate(180deg);
          -ms-transform: translateY(100%) rotate(180deg);
          -o-transform: translateY(100%) rotate(180deg);
          transform: translateY(100%) rotate(180deg);
        }

        &:hover {
          .img {
            -webkit-transform: translateY(100%) rotate(180deg);
            -moz-transform: translateY(100%) rotate(180deg);
            -ms-transform: translateY(100%) rotate(180deg);
            -o-transform: translateY(100%) rotate(180deg);
            transform: translateY(100%) rotate(180deg);
          }

          .info-box {
            -webkit-transform: translateY(0) rotate(0);
            -moz-transform: translateY(0) rotate(0);
            -ms-transform: translateY(0) rotate(0);
            -o-transform: translateY(0) rotate(0);
            transform: translateY(0) rotate(0);
            -webkit-transition-delay: 0.4s;
            -moz-transition-delay: 0.4s;
            transition-delay: 0.4s;
          }
        }
      }
    }
    
    &.effect13{
      .img {
        &::before {
          position: absolute;
          display: block;
          content: '';
          width: 100%;
          height: 100%;
          border-radius: 50%;
          box-shadow: inset 0 0 0 16px rgba(255, 255, 255, 0.6), 0 1px 2px rgba(0, 0, 0, 0.3);
          -webkit-transition: all 0.35s ease-in-out;
          -moz-transition: all 0.35s ease-in-out;
          transition: all 0.35s ease-in-out;
        }
      }

      .info-box {
          background: #333333;
          background: rgba(0, 0, 0, 0.6);
          opacity: 0;
          pointer-events: none;
          -webkit-transition: all 0.35s ease-in-out;
          -moz-transition: all 0.35s ease-in-out;
          transition: all 0.35s ease-in-out;

        h3 {
          visibility: hidden;
          color: #fff;
          text-transform: uppercase;
          position: relative;
          letter-spacing: 2px;
          font-size: 22px;
          margin: 0 30px;
          padding: 55px 0 0 0;
          height: 110px;
          text-shadow: 0 0 1px white, 0 1px 2px rgba(0, 0, 0, 0.3);
          -webkit-transition: all 0.35s ease-in-out;
          -moz-transition: all 0.35s ease-in-out;
          transition: all 0.35s ease-in-out;
        }

        p {
          visibility: hidden;
          color: #bbb;
          padding: 10px 5px;
          font-style: italic;
          margin: 0 30px;
          font-size: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.5);
          -webkit-transition: all 0.35s ease-in-out;
          -moz-transition: all 0.35s ease-in-out;
          transition: all 0.35s ease-in-out;
        }
      }

      &:hover {
        .info-box {
          opacity: 1;

          h3 {
            visibility: visible;
          }

          p {
            visibility: visible;
          }
        }
      }


      &.from_left_and_right{
        h3 {
          -webkit-transform: translateX(-100%);
          -moz-transform: translateX(-100%);
          -ms-transform: translateX(-100%);
          -o-transform: translateX(-100%);
          transform: translateX(-100%);
        }

        p {
          -webkit-transform: translateX(100%);
          -moz-transform: translateX(100%);
          -ms-transform: translateX(100%);
          -o-transform: translateX(100%);
          transform: translateX(100%);
        }

        &:hover {
          h3 {
            -webkit-transform: translateX(0);
            -moz-transform: translateX(0);
            -ms-transform: translateX(0);
            -o-transform: translateX(0);
            transform: translateX(0);
          }
          
          p {
            -webkit-transform: translateX(0);
            -moz-transform: translateX(0);
            -ms-transform: translateX(0);
            -o-transform: translateX(0);
            transform: translateX(0);
          }
        }
      }

      &.top_to_bottom{
        h3 {
          -webkit-transform: translateY(-100%);
          -moz-transform: translateY(-100%);
          -ms-transform: translateY(-100%);
          -o-transform: translateY(-100%);
          transform: translateY(-100%);
        }

        p {
          -webkit-transform: translateY(-100%);
          -moz-transform: translateY(-100%);
          -ms-transform: translateY(-100%);
          -o-transform: translateY(-100%);
          transform: translateY(-100%);
        }

        &:hover {
          h3 {
            -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -ms-transform: translateY(0);
            -o-transform: translateY(0);
            transform: translateY(0);
          }

          p {
            -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -ms-transform: translateY(0);
            -o-transform: translateY(0);
            transform: translateY(0);
          }
        }
      }

      &.bottom_to_top{
        h3 {
          -webkit-transform: translateY(100%);
          -moz-transform: translateY(100%);
          -ms-transform: translateY(100%);
          -o-transform: translateY(100%);
          transform: translateY(100%);
        }
        p {
          -webkit-transform: translateY(100%);
          -moz-transform: translateY(100%);
          -ms-transform: translateY(100%);
          -o-transform: translateY(100%);
          transform: translateY(100%);
        }

        &:hover {
          h3 {
            -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -ms-transform: translateY(0);
            -o-transform: translateY(0);
            transform: translateY(0);
          }

          p {
            -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -ms-transform: translateY(0);
            -o-transform: translateY(0);
            transform: translateY(0);
          }
        }
      }
    }
    
    &.effect14{
      -webkit-perspective: 900px;
      -moz-perspective: 900px;
      perspective: 900px;

      .img {
        visibility: visible;
        opacity: 1;
        -webkit-transition: all 0.4s ease-out;
        -moz-transition: all 0.4s ease-out;
        transition: all 0.4s ease-out; 

        &::before {
          position: absolute;
          display: block;
          content: '';
          width: 100%;
          height: 100%;
          border-radius: 50%;
          box-shadow: inset 0 0 0 16px rgba(255, 255, 255, 0.6), 0 1px 2px rgba(0, 0, 0, 0.3);
          -webkit-transition: all 0.35s ease-in-out;
          -moz-transition: all 0.35s ease-in-out;
          transition: all 0.35s ease-in-out;
        }
      }

      .info-box {
        background: #333333;
        opacity: 0;
        visibility: hidden;
        -webkit-transition: all 0.35s ease-in-out 0.3s;
        -moz-transition: all 0.35s ease-in-out 0.3s;
        transition: all 0.35s ease-in-out 0.3s;

        h3 {
          color: #fff;
          text-transform: uppercase;
          position: relative;
          letter-spacing: 2px;
          font-size: 22px;
          margin: 0 30px;
          padding: 55px 0 0 0;
          height: 110px;
          text-shadow: 0 0 1px white, 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        p {
          color: #bbb;
          padding: 10px 5px;
          font-style: italic;
          margin: 0 30px;
          font-size: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.5);
        }
      }

      &:hover{
        .img {
          opacity: 0;
          visibility: hidden;
        }

        .info-box {
          visibility: visible;
          opacity: 1;
        }
      }

      &.left_to_right{
        .img {
          -webkit-transform: rotateY(0);
          -moz-transform: rotateY(0);
          -ms-transform: rotateY(0);
          -o-transform: rotateY(0);
          transform: rotateY(0);
          -webkit-transform-origin: 100% 50%;
          -moz-transform-origin: 100% 50%;
          -ms-transform-origin: 100% 50%;
          -o-transform-origin: 100% 50%;
          transform-origin: 100% 50%;
        }

        .info-box {
          -webkit-transform: rotateY(90deg);
          -moz-transform: rotateY(90deg);
          -ms-transform: rotateY(90deg);
          -o-transform: rotateY(90deg);
          transform: rotateY(90deg);
          -webkit-transform-origin: 0% 50%;
          -moz-transform-origin: 0% 50%;
          -ms-transform-origin: 0% 50%;
          -o-transform-origin: 0% 50%;
          transform-origin: 0% 50%;
        }

        &:hover {
          .img {
            -webkit-transform: rotateY(-90deg);
            -moz-transform: rotateY(-90deg);
            -ms-transform: rotateY(-90deg);
            -o-transform: rotateY(-90deg);
            transform: rotateY(-90deg);
          }

          .info-box {
            -webkit-transform: rotateY(0);
            -moz-transform: rotateY(0);
            -ms-transform: rotateY(0);
            -o-transform: rotateY(0);
            transform: rotateY(0);
          }
        }
      }

      &.right_to_left{
        .img {
          -webkit-transform: rotateY(0);
          -moz-transform: rotateY(0);
          -ms-transform: rotateY(0);
          -o-transform: rotateY(0);
          transform: rotateY(0);
          -webkit-transform-origin: 0% 50%;
          -moz-transform-origin: 0% 50%;
          -ms-transform-origin: 0% 50%;
          -o-transform-origin: 0% 50%;
          transform-origin: 0% 50%;
        }

        .info-box {
          -webkit-transform: rotateY(-90deg);
          -moz-transform: rotateY(-90deg);
          -ms-transform: rotateY(-90deg);
          -o-transform: rotateY(-90deg);
          transform: rotateY(-90deg);
          -webkit-transform-origin: 100% 50%;
          -moz-transform-origin: 100% 50%;
          -ms-transform-origin: 100% 50%;
          -o-transform-origin: 100% 50%;
          transform-origin: 100% 50%;
        }

        &:hover {
          .img {
            -webkit-transform: rotateY(90deg);
            -moz-transform: rotateY(90deg);
            -ms-transform: rotateY(90deg);
            -o-transform: rotateY(90deg);
            transform: rotateY(90deg);
          }

          .info-box {
            -webkit-transform: rotateY(0);
            -moz-transform: rotateY(0);
            -ms-transform: rotateY(0);
            -o-transform: rotateY(0);
            transform: rotateY(0);
          }
        }
      }

      &.top_to_bottom{
        .img {
          -webkit-transform: rotateX(0);
          -moz-transform: rotateX(0);
          -ms-transform: rotateX(0);
          -o-transform: rotateX(0);
          transform: rotateX(0);
          -webkit-transform-origin: 50% 100%;
          -moz-transform-origin: 50% 100%;
          -ms-transform-origin: 50% 100%;
          -o-transform-origin: 50% 100%;
          transform-origin: 50% 100%;
        }

        .info-box {
          -webkit-transform: rotateX(-90deg);
          -moz-transform: rotateX(-90deg);
          -ms-transform: rotateX(-90deg);
          -o-transform: rotateX(-90deg);
          transform: rotateX(-90deg);
          -webkit-transform-origin: 50% 0;
          -moz-transform-origin: 50% 0;
          -ms-transform-origin: 50% 0;
          -o-transform-origin: 50% 0;
          transform-origin: 50% 0;
        }

        &:hover {
          .img {
            -webkit-transform: rotateX(90deg);
            -moz-transform: rotateX(90deg);
            -ms-transform: rotateX(90deg);
            -o-transform: rotateX(90deg);
            transform: rotateX(90deg);
          }

          .info-box {
            -webkit-transform: rotateX(0);
            -moz-transform: rotateX(0);
            -ms-transform: rotateX(0);
            -o-transform: rotateX(0);
            transform: rotateX(0);
          }
        }
      }

      &.bottom_to_top{
        .img {
          -webkit-transform: rotateX(0);
          -moz-transform: rotateX(0);
          -ms-transform: rotateX(0);
          -o-transform: rotateX(0);
          transform: rotateX(0);
          -webkit-transform-origin: 50% 0;
          -moz-transform-origin: 50% 0;
          -ms-transform-origin: 50% 0;
          -o-transform-origin: 50% 0;
          transform-origin: 50% 0;
        }

        .info-box {
          -webkit-transform: rotateX(90deg);
          -moz-transform: rotateX(90deg);
          -ms-transform: rotateX(90deg);
          -o-transform: rotateX(90deg);
          transform: rotateX(90deg);
          -webkit-transform-origin: 50% 100%;
          -moz-transform-origin: 50% 100%;
          -ms-transform-origin: 50% 100%;
          -o-transform-origin: 50% 100%;
          transform-origin: 50% 100%;
        }

        &:hover {
          .img {
            -webkit-transform: rotateX(-90deg);
            -moz-transform: rotateX(-90deg);
            -ms-transform: rotateX(-90deg);
            -o-transform: rotateX(-90deg);
            transform: rotateX(-90deg);
          }

          .info-box {
            -webkit-transform: rotateX(0);
            -moz-transform: rotateX(0);
            -ms-transform: rotateX(0);
            -o-transform: rotateX(0);
            transform: rotateX(0);
          }
        }
      }
    }
    
    &.effect15{
      .img {
        opacity: 1;
        visibility: visible;
        -webkit-transform: scale(1) rotate(0);
        -moz-transform: scale(1) rotate(0);
        -ms-transform: scale(1) rotate(0);
        -o-transform: scale(1) rotate(0);
        transform: scale(1) rotate(0);
        -webkit-transition: all 0.35s ease-in-out;
        -moz-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;     

        &::before {
          position: absolute;
          display: block;
          content: '';
          width: 100%;
          height: 100%;
          border-radius: 50%;
          box-shadow: inset 0 0 0 16px rgba(255, 255, 255, 0.6), 0 1px 2px rgba(0, 0, 0, 0.3);
          -webkit-transition: all 0.35s ease-in-out;
          -moz-transition: all 0.35s ease-in-out;
          transition: all 0.35s ease-in-out;
        }
      }

      .info-box {
        background: #333333;
        opacity: 0;
        visibility: hidden;
        -webkit-transform: scale(0.5) rotate(-720deg);
        -moz-transform: scale(0.5) rotate(-720deg);
        -ms-transform: scale(0.5) rotate(-720deg);
        -o-transform: scale(0.5) rotate(-720deg);
        transform: scale(0.5) rotate(-720deg);
        -webkit-transition: all 0.35s ease-in-out 0.3s;
        -moz-transition: all 0.35s ease-in-out 0.3s;
        transition: all 0.35s ease-in-out 0.3s;

        h3 {
          color: #fff;
          text-transform: uppercase;
          position: relative;
          letter-spacing: 2px;
          font-size: 22px;
          margin: 0 30px;
          padding: 55px 0 0 0;
          height: 110px;
          text-shadow: 0 0 1px white, 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        p {
          color: #bbb;
          padding: 10px 5px;
          font-style: italic;
          margin: 0 30px;
          font-size: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.5);
        }
      }

      &:hover {
        .img {
          opacity: 0;
          visibility: hidden;
          -webkit-transform: scale(0.5) rotate(720deg);
          -moz-transform: scale(0.5) rotate(720deg);
          -ms-transform: scale(0.5) rotate(720deg);
          -o-transform: scale(0.5) rotate(720deg);
          transform: scale(0.5) rotate(720deg);
        }

        .info-box {
          opacity: 1;
          visibility: visible;
          -webkit-transform: scale(1) rotate(0);
          -moz-transform: scale(1) rotate(0);
          -ms-transform: scale(1) rotate(0);
          -o-transform: scale(1) rotate(0);
          transform: scale(1) rotate(0);
        }
      }
    }
    
    &.effect16{
      .img {
        z-index: 11;
        -webkit-transition: all 0.35s ease-in-out;
        -moz-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;    

        &::before {
          position: absolute;
          display: block;
          content: '';
          width: 100%;
          height: 100%;
          border-radius: 50%;
          box-shadow: inset 0 0 0 16px rgba(255, 255, 255, 0.6), 0 1px 2px rgba(0, 0, 0, 0.3);
          -webkit-transition: all 0.35s ease-in-out;
          -moz-transition: all 0.35s ease-in-out;
          transition: all 0.35s ease-in-out;
        }
      }

      .info-box {
        background: #333333;
        -webkit-transition: all 0.35s ease-in-out;
        -moz-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;

        h3 {
          color: #fff;
          text-transform: uppercase;
          position: relative;
          letter-spacing: 2px;
          font-size: 22px;
          margin: 0 30px;
          padding: 55px 0 0 0;
          height: 110px;
          text-shadow: 0 0 1px white, 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        p {
          color: #bbb;
          padding: 10px 5px;
          font-style: italic;
          margin: 0 30px;
          font-size: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.5);
          -webkit-transition: all 0.35s ease-in-out;
          -moz-transition: all 0.35s ease-in-out;
          transition: all 0.35s ease-in-out;
        }
      }

      &.left_to_right{
        .img {
          -webkit-transform-origin: 95% 40%;
          -moz-transform-origin: 95% 40%;
          -ms-transform-origin: 95% 40%;
          -o-transform-origin: 95% 40%;
          transform-origin: 95% 40%;

          &::after {
            content: '';
            width: 8px;
            height: 8px;
            position: absolute;
            border-radius: 50%;
            top: 40%;
            left: 95%;
            margin: -4px 0 0 -4px;
            background: rgba(0, 0, 0, 0.8);
            box-shadow: 0 0 1px rgba(255, 255, 255, 0.9);
          }
        }

        &:hover {
          .img {
            -webkit-transform: rotate(-120deg);
            -moz-transform: rotate(-120deg);
            -ms-transform: rotate(-120deg);
            -o-transform: rotate(-120deg);
            transform: rotate(-120deg);
          }
        }
      }

      &.right_to_left{
        .img {
          -webkit-transform-origin: 5% 40%;
          -moz-transform-origin: 5% 40%;
          -ms-transform-origin: 5% 40%;
          -o-transform-origin: 5% 40%;
          transform-origin: 5% 40%;

          &::after {
            content: '';
            width: 8px;
            height: 8px;
            position: absolute;
            border-radius: 50%;
            top: 40%;
            left: 5%;
            margin: -4px 0 0 -4px;
            background: rgba(0, 0, 0, 0.8);
            box-shadow: 0 0 1px rgba(255, 255, 255, 0.9);
          }
        }

        &:hover {
          .img {
            -webkit-transform: rotate(120deg);
            -moz-transform: rotate(120deg);
            -ms-transform: rotate(120deg);
            -o-transform: rotate(120deg);
            transform: rotate(120deg);
          }
        }
      }
    }
    
    &.effect17{
      .img {
        &::before {
          position: absolute;
          display: block;
          content: '';
          width: 100%;
          height: 100%;
          border-radius: 50%;
          box-shadow: inset 0 0 0 16px rgba(255, 255, 255, 0.6), 0 1px 2px rgba(0, 0, 0, 0.3);
          -webkit-transition: all 0.35s ease-in-out;
          -moz-transition: all 0.35s ease-in-out;
          transition: all 0.35s ease-in-out;
        }
      }

      .info-box {
        opacity: 0;
        -webkit-transform: scale(0);
        -moz-transform: scale(0);
        -ms-transform: scale(0);
        -o-transform: scale(0);
        transform: scale(0);
        -webkit-transition: all 0.35s ease-in-out;
        -moz-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;

        h3 {
          color: #fff;
          text-transform: uppercase;
          position: relative;
          letter-spacing: 2px;
          font-size: 22px;
          margin: 0 30px;
          padding: 55px 0 0 0;
          height: 110px;
          text-shadow: 0 0 1px white, 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        p {
          color: #bbb;
          padding: 10px 5px;
          font-style: italic;
          margin: 0 30px;
          font-size: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.5);
          opacity: 0;
          -webkit-transition: all 0.35s ease-in-out;
          -moz-transition: all 0.35s ease-in-out;
          transition: all 0.35s ease-in-out;
        }
      }

      &:hover{
        .img{
          &::before {
            box-shadow: inset 0 0 0 110px #333333, inset 0 0 0 16px rgba(255, 255, 255, 0.8), 0 1px 2px rgba(0, 0, 0, 0.1);
            box-shadow: inset 0 0 0 110px rgba(0, 0, 0, 0.6), inset 0 0 0 16px rgba(255, 255, 255, 0.8), 0 1px 2px rgba(0, 0, 0, 0.1);
          }
        }

        .info-box {
          opacity: 1;
          -webkit-transform: scale(1);
          -moz-transform: scale(1);
          -ms-transform: scale(1);
          -o-transform: scale(1);
          transform: scale(1);

          p {
            opacity: 1;
          }
        }
      }
    }
    
    &.effect18{
      -webkit-perspective: 900px;
      -moz-perspective: 900px;
      perspective: 900px;

      .img {
        z-index: 11;
        -webkit-transition: all 0.5s ease-in-out;
        -moz-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;     

        &::before {
          position: absolute;
          display: block;
          content: '';
          width: 100%;
          height: 100%;
          border-radius: 50%;
          box-shadow: inset 0 0 0 16px rgba(255, 255, 255, 0.6), 0 1px 2px rgba(0, 0, 0, 0.3);
          -webkit-transition: all 0.35s ease-in-out;
          -moz-transition: all 0.35s ease-in-out;
          transition: all 0.35s ease-in-out;
        }
      }

      .info-box {
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        -ms-transform-style: preserve-3d;
        -o-transform-style: preserve-3d;
        transform-style: preserve-3d;
        opacity: 1;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        background: #333333;

        h3 {
          color: #fff;
          text-transform: uppercase;
          position: relative;
          letter-spacing: 2px;
          font-size: 22px;
          margin: 0 30px;
          padding: 55px 0 0 0;
          height: 110px;
          text-shadow: 0 0 1px white, 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        p {
          color: #bbb;
          padding: 10px 5px;
          font-style: italic;
          margin: 0 30px;
          font-size: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.5);
        }
      }

      &.left_to_right{
        .img {
          -webkit-transform-origin: 100% 50%;
          -moz-transform-origin: 100% 50%;
          -ms-transform-origin: 100% 50%;
          -o-transform-origin: 100% 50%;
          transform-origin: 100% 50%;
        }

        &:hover {
          .img {
            -webkit-transform: rotate3d(0, 1, 0, 180deg);
            -moz-transform: rotate3d(0, 1, 0, 180deg);
            -ms-transform: rotate3d(0, 1, 0, 180deg);
            -o-transform: rotate3d(0, 1, 0, 180deg);
            transform: rotate3d(0, 1, 0, 180deg);
          }
        }
      }

      &.right_to_left{
        .img {
          -webkit-transform-origin: 0% 50%;
          -moz-transform-origin: 0% 50%;
          -ms-transform-origin: 0% 50%;
          -o-transform-origin: 0% 50%;
          transform-origin: 0% 50%;
        }

        &:hover {
          .img {
            -webkit-transform: rotate3d(0, 1, 0, -180deg);
            -moz-transform: rotate3d(0, 1, 0, -180deg);
            -ms-transform: rotate3d(0, 1, 0, -180deg);
            -o-transform: rotate3d(0, 1, 0, -180deg);
            transform: rotate3d(0, 1, 0, -180deg);
          }
        }
      }

      &.top_to_bottom{
        .img {
          -webkit-transform-origin: 50% 100%;
          -moz-transform-origin: 50% 100%;
          -ms-transform-origin: 50% 100%;
          -o-transform-origin: 50% 100%;
          transform-origin: 50% 100%;
        }

        &:hover {
          .img {
            -webkit-transform: rotate3d(1, 0, 0, -180deg);
            -moz-transform: rotate3d(1, 0, 0, -180deg);
            -ms-transform: rotate3d(1, 0, 0, -180deg);
            -o-transform: rotate3d(1, 0, 0, -180deg);
            transform: rotate3d(1, 0, 0, -180deg);
          }
        }
      }

      &.bottom_to_top{
        .img {
          -webkit-transform-origin: 50% 0;
          -moz-transform-origin: 50% 0;
          -ms-transform-origin: 50% 0;
          -o-transform-origin: 50% 0;
          transform-origin: 50% 0;
        }

        &:hover {
          .img {
            -webkit-transform: rotate3d(1, 0, 0, 180deg);
            -moz-transform: rotate3d(1, 0, 0, 180deg);
            -ms-transform: rotate3d(1, 0, 0, 180deg);
            -o-transform: rotate3d(1, 0, 0, 180deg);
            transform: rotate3d(1, 0, 0, 180deg);
          }
        }
      }
    }
    
    &.effect19{
      .img {
        &::before {
          position: absolute;
          display: block;
          content: '';
          width: 100%;
          height: 100%;
          border-radius: 50%;
          box-shadow: inset 0 0 0 16px rgba(255, 255, 255, 0.6), 0 1px 2px rgba(0, 0, 0, 0.3);
          -webkit-transition: all 0.35s ease-in-out;
          -moz-transition: all 0.35s ease-in-out;
          transition: all 0.35s ease-in-out;
        }
      }

      .info-box {
        background: #333333;
        background: rgba(0, 0, 0, 0.6);
        opacity: 0;
        -webkit-transform: scale(0);
        -moz-transform: scale(0);
        -ms-transform: scale(0);
        -o-transform: scale(0);
        transform: scale(0);
        -webkit-transition: all 0.35s ease-in-out;
        -moz-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;

        h3 {
          color: #fff;
          text-transform: uppercase;
          position: relative;
          letter-spacing: 2px;
          font-size: 22px;
          margin: 0 30px;
          padding: 55px 0 0 0;
          height: 110px;
          text-shadow: 0 0 1px white, 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        p {
          color: #bbb;
          padding: 10px 5px;
          font-style: italic;
          margin: 0 30px;
          font-size: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.5);
        }
      }

      &:hover {
        .info-box {
          opacity: 1;
          -webkit-transform: scale(1);
          -moz-transform: scale(1);
          -ms-transform: scale(1);
          -o-transform: scale(1);
          transform: scale(1);
        }
      }
    }
    
    &.effect20{
      -webkit-perspective: 900px;
      -moz-perspective: 900px;
      perspective: 900px;

      .img {
        -webkit-transition: all 0.35s linear;
        -moz-transition: all 0.35s linear;
        transition: all 0.35s linear;
        -webkit-transform-origin: 50% 0%;
        -moz-transform-origin: 50% 0%;
        -ms-transform-origin: 50% 0%;
        -o-transform-origin: 50% 0%;
        transform-origin: 50% 0%;

        &::before {
          position: absolute;
          display: block;
          content: '';
          width: 100%;
          height: 100%;
          border-radius: 50%;
          box-shadow: inset 0 0 0 16px rgba(255, 255, 255, 0.6), 0 1px 2px rgba(0, 0, 0, 0.3);
          -webkit-transition: all 0.35s ease-in-out;
          -moz-transition: all 0.35s ease-in-out;
          transition: all 0.35s ease-in-out;
        }
      }

      .info-box {
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        -ms-transform-style: preserve-3d;
        -o-transform-style: preserve-3d;
        transform-style: preserve-3d;
        opacity: 1;
        visibility: hidden;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        background: #333333;
        -webkit-transition: all 0.35s linear;
        -moz-transition: all 0.35s linear;
        transition: all 0.35s linear;
        -webkit-transform-origin: 50% 0%;
        -moz-transform-origin: 50% 0%;
        -ms-transform-origin: 50% 0%;
        -o-transform-origin: 50% 0%;
        transform-origin: 50% 0%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;

        h3 {
          color: #fff;
          text-transform: uppercase;
          position: relative;
          letter-spacing: 2px;
          font-size: 22px;
          margin: 0 30px;
          padding: 55px 0 0 0;
          height: 110px;
          text-shadow: 0 0 1px white, 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        p {
          color: #bbb;
          padding: 10px 5px;
          font-style: italic;
          margin: 0 30px;
          font-size: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.5);
        }
      }

      &:hover{
        .img {
          opacity: 0;
        }

        .info-box {
          opacity: 1;
          visibility: visible;
        }
      }

      &.top_to_bottom{
        .info-box {
          -webkit-transform: translate3d(0, 0, -220px) rotate3d(1, 0, 0, 90deg);
          -moz-transform: translate3d(0, 0, -220px) rotate3d(1, 0, 0, 90deg);
          -ms-transform: translate3d(0, 0, -220px) rotate3d(1, 0, 0, 90deg);
          -o-transform: translate3d(0, 0, -220px) rotate3d(1, 0, 0, 90deg);
          transform: translate3d(0, 0, -220px) rotate3d(1, 0, 0, 90deg);
        }

        &:hover {
          .img {
            -webkit-transform: translate3d(0, 280px, 0) rotate3d(1, 0, 0, -90deg);
            -moz-transform: translate3d(0, 280px, 0) rotate3d(1, 0, 0, -90deg);
            -ms-transform: translate3d(0, 280px, 0) rotate3d(1, 0, 0, -90deg);
            -o-transform: translate3d(0, 280px, 0) rotate3d(1, 0, 0, -90deg);
            transform: translate3d(0, 280px, 0) rotate3d(1, 0, 0, -90deg);
          }

          .info-box {
            -webkit-transform: rotate3d(1, 0, 0, 0deg);
            -moz-transform: rotate3d(1, 0, 0, 0deg);
            -ms-transform: rotate3d(1, 0, 0, 0deg);
            -o-transform: rotate3d(1, 0, 0, 0deg);
            transform: rotate3d(1, 0, 0, 0deg);
          }
        }
      }

      &.bottom_to_top{
        .info-box {
          -webkit-transform: translate3d(0, 280px, 0) rotate3d(1, 0, 0, -90deg);
          -moz-transform: translate3d(0, 280px, 0) rotate3d(1, 0, 0, -90deg);
          -ms-transform: translate3d(0, 280px, 0) rotate3d(1, 0, 0, -90deg);
          -o-transform: translate3d(0, 280px, 0) rotate3d(1, 0, 0, -90deg);
          transform: translate3d(0, 280px, 0) rotate3d(1, 0, 0, -90deg);
        }

        &:hover {
          .img {
            -webkit-transform: translate3d(0, 0, -220px) rotate3d(1, 0, 0, 90deg);
            -moz-transform: translate3d(0, 0, -220px) rotate3d(1, 0, 0, 90deg);
            -ms-transform: translate3d(0, 0, -220px) rotate3d(1, 0, 0, 90deg);
            -o-transform: translate3d(0, 0, -220px) rotate3d(1, 0, 0, 90deg);
            transform: translate3d(0, 0, -220px) rotate3d(1, 0, 0, 90deg);
          }

          .info-box {
            -webkit-transform: rotate3d(1, 0, 0, 0deg);
            -moz-transform: rotate3d(1, 0, 0, 0deg);
            -ms-transform: rotate3d(1, 0, 0, 0deg);
            -o-transform: rotate3d(1, 0, 0, 0deg);
            transform: rotate3d(1, 0, 0, 0deg);
          }
        }
      }
    }
  }

  &.square {
    border: 6px solid #fff;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);

    &.effect1 {
      overflow: hidden;

      .img {
        z-index: 11;
        position: absolute;
        -webkit-transition: all 0.35s ease-in-out;
        -moz-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);
      }

      .info-box {
        background: #333333;
        visibility: hidden;
        opacity: 0;
        -webkit-transform: scale(0);
        -moz-transform: scale(0);
        -ms-transform: scale(0);
        -o-transform: scale(0);
        transform: scale(0);
        -webkit-transition: all 0.35s ease-in-out;
        -moz-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;
      }

      &:hover{
        .info-box {
          visibility: visible;
          opacity: 1;
          -webkit-transform: scale(1);
          -moz-transform: scale(1);
          -ms-transform: scale(1);
          -o-transform: scale(1);
          transform: scale(1);
        }
      }

      &.left_and_right{
        .info-box {
          h3 {
            position: absolute;
            top: 12px;
            left: 12px;
            text-transform: uppercase;
            color: #fff;
            text-align: center;
            font-size: 17px;
            margin: 0;
          }

          p {
            position: absolute;
            right: 12px;
            bottom: 12px;
            margin: 0;
            font-style: italic;
            font-size: 12px;
            color: #bbb;
          }
        }

        &:hover {
          .img {
            -webkit-transform: scale(0.6);
            -moz-transform: scale(0.6);
            -ms-transform: scale(0.6);
            -o-transform: scale(0.6);
            transform: scale(0.6);
          }
        }
      }

      &.top_to_bottom{
        .info-box {
          h3 {
            text-transform: uppercase;
            color: #fff;
            text-align: center;
            font-size: 17px;
            padding: 10px 10px 0 4px;
          }

          p {
            font-style: italic;
            font-size: 12px;
            color: #bbb;
            padding: 5px;
            text-align: center;
          }
        }

        &:hover {
          .img {
            -webkit-transform: translateY(30px) scale(0.6);
            -moz-transform: translateY(30px) scale(0.6);
            -ms-transform: translateY(30px) scale(0.6);
            -o-transform: translateY(30px) scale(0.6);
            transform: translateY(30px) scale(0.6);
          }
        }
      }

      &.bottom_to_top{
        .info-box {
          h3 {
            text-transform: uppercase;
            color: #fff;
            text-align: center;
            font-size: 17px;
            padding: 10px 10px 0 4px;
            margin: 50px 0 0 0;
          }

          p {
            font-style: italic;
            font-size: 12px;
            color: #bbb;
            padding: 5px;
            text-align: center;
          }
        }

        &:hover {
          .img {
            -webkit-transform: translateY(-30px) scale(0.6);
            -moz-transform: translateY(-30px) scale(0.6);
            -ms-transform: translateY(-30px) scale(0.6);
            -o-transform: translateY(-30px) scale(0.6);
            transform: translateY(-30px) scale(0.6);
          }
        }
      }
    }

    &.effect2 {
      overflow: hidden;

      .img {
        opacity: 1;
        -webkit-transition: all 0.5s ease-in-out;
        -moz-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
        -webkit-transform: rotate(0deg) scale(1);
        -moz-transform: rotate(0deg) scale(1);
        -ms-transform: rotate(0deg) scale(1);
        -o-transform: rotate(0deg) scale(1);
        transform: rotate(0deg) scale(1);
      }

      .info-box {
        background: #333333;
        visibility: hidden;
        -webkit-transition: all 0.35s 0.3s ease-in-out;
        -moz-transition: all 0.35s 0.3s ease-in-out;
        transition: all 0.35s 0.3s ease-in-out;

        h3 {
          text-transform: uppercase;
          color: #fff;
          text-align: center;
          font-size: 17px;
          padding: 10px;
          background: #111111;
          margin: 30px 0 0 0;
          -webkit-transform: translateY(-200px);
          -moz-transform: translateY(-200px);
          -ms-transform: translateY(-200px);
          -o-transform: translateY(-200px);
          transform: translateY(-200px);
          -webkit-transition: all 0.35s 0.6s ease-in-out;
          -moz-transition: all 0.35s 0.6s ease-in-out;
          transition: all 0.35s 0.6s ease-in-out;
        }

        p {
          font-style: italic;
          font-size: 12px;
          position: relative;
          color: #bbb;
          padding: 20px 20px 20px;
          text-align: center;
          -webkit-transform: translateY(-200px);
          -moz-transform: translateY(-200px);
          -ms-transform: translateY(-200px);
          -o-transform: translateY(-200px);
          transform: translateY(-200px);
          -webkit-transition: all 0.35s 0.5s linear;
          -moz-transition: all 0.35s 0.5s linear;
          transition: all 0.35s 0.5s linear;
        }
      }

      &:hover{
        .img {
          -webkit-transform: rotate(720deg) scale(0);
          -moz-transform: rotate(720deg) scale(0);
          -ms-transform: rotate(720deg) scale(0);
          -o-transform: rotate(720deg) scale(0);
          transform: rotate(720deg) scale(0);
          opacity: 0;
        }

        .info-box {
          visibility: visible;

          h3, p {
            -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -ms-transform: translateY(0);
            -o-transform: translateY(0);
            transform: translateY(0);
          }
        }
      }
    }

    &.effect3 {
      overflow: hidden;

      .img {
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        -o-transform: translateY(0);
        transform: translateY(0);
        -webkit-transition: all 0.35s ease-in-out;
        -moz-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;
      }

      .info-box {
        height: 65px;
        background: #333333;
        opacity: 0;
        -webkit-transition: all 0.35s ease-in-out;
        -moz-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;

        h3 {
          text-transform: uppercase;
          color: #fff;
          text-align: center;
          font-size: 17px;
          padding: 10px 10px 0 4px;
          margin: 4px 0 0 0;
        }

        p {
          font-style: italic;
          font-size: 12px;
          position: relative;
          color: #bbb;
          padding: 5px;
          text-align: center;
        }
      }

      &:hover{
        .info-box {
          visibility: visible;
          opacity: 1;
        }
      }

      &.top_to_bottom{
        .info-box {
          bottom: auto;
          -webkit-transform: translateY(-100%);
          -moz-transform: translateY(-100%);
          -ms-transform: translateY(-100%);
          -o-transform: translateY(-100%);
          transform: translateY(-100%);
        }

        &:hover {
          .img {
            -webkit-transform: translateY(50px);
            -moz-transform: translateY(50px);
            -ms-transform: translateY(50px);
            -o-transform: translateY(50px);
            transform: translateY(50px);
          }

          .info-box {
            -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -ms-transform: translateY(0);
            -o-transform: translateY(0);
            transform: translateY(0);
          }
        }
      }

      &.bottom_to_top{
        .info-box {
          top: auto;
          -webkit-transform: translateY(100%);
          -moz-transform: translateY(100%);
          -ms-transform: translateY(100%);
          -o-transform: translateY(100%);
          transform: translateY(100%);
        }

        &:hover {
          .img {
            -webkit-transform: translateY(-50px);
            -moz-transform: translateY(-50px);
            -ms-transform: translateY(-50px);
            -o-transform: translateY(-50px);
            transform: translateY(-50px);
          }

          .info-box {
            -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -ms-transform: translateY(0);
            -o-transform: translateY(0);
            transform: translateY(0);
          }
        }
      }
    }

    &.effect4 {
      overflow: hidden;
      position: relative;

      .img {
        -webkit-transition: all 0.35s ease-in-out;
        -moz-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;
      }

      .mask1,.mask2 {
        position: absolute;
        background: #333333;
        background: rgba(0, 0, 0, 0.6);
        height: 212px;
        width: 212px;
        -webkit-transition: all 0.35s ease-in-out;
        -moz-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;
      }

      .mask1 {
        left: auto;
        right: 0;
        top: 0;
        -webkit-transform: rotate(56.5deg) translateX(-180px);
        -moz-transform: rotate(56.5deg) translateX(-180px);
        -ms-transform: rotate(56.5deg) translateX(-180px);
        -o-transform: rotate(56.5deg) translateX(-180px);
        transform: rotate(56.5deg) translateX(-180px);
        -webkit-transform-origin: 100% 0%;
        -moz-transform-origin: 100% 0%;
        -ms-transform-origin: 100% 0%;
        -o-transform-origin: 100% 0%;
        transform-origin: 100% 0%;
      }

      .mask2 {
        top: auto;
        bottom: 0;
        left: 0;
        -webkit-transform: rotate(56.5deg) translateX(180px);
        -moz-transform: rotate(56.5deg) translateX(180px);
        -ms-transform: rotate(56.5deg) translateX(180px);
        -o-transform: rotate(56.5deg) translateX(180px);
        transform: rotate(56.5deg) translateX(180px);
        -webkit-transform-origin: 0% 100%;
        -moz-transform-origin: 0% 100%;
        -ms-transform-origin: 0% 100%;
        -o-transform-origin: 0% 100%;
        transform-origin: 0% 100%;
      }

      .info-box {
        background: #111111;
        height: 0;
        visibility: hidden;
        width: 212px;
        -webkit-transform: rotate(-30.5deg) translate(-56px, 83px);
        -moz-transform: rotate(-30.5deg) translate(-56px, 83px);
        -ms-transform: rotate(-30.5deg) translate(-56px, 83px);
        -o-transform: rotate(-30.5deg) translate(-56px, 83px);
        transform: rotate(-30.5deg) translate(-56px, 83px);
        -webkit-transform-origin: 0% 100%;
        -moz-transform-origin: 0% 100%;
        -ms-transform-origin: 0% 100%;
        -o-transform-origin: 0% 100%;
        transform-origin: 0% 100%;
        -webkit-transition: all 0.35s ease-in-out 0.35s;
        -moz-transition: all 0.35s ease-in-out 0.35s;
        transition: all 0.35s ease-in-out 0.35s;

        h3 {
          text-transform: uppercase;
          color: #fff;
          text-align: center;
          font-size: 17px;
          padding: 5px;
          background: transparent;
          margin-top: 5px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          opacity: 0;
          -webkit-transition: all 0.35s ease-in-out 0.35s;
          -moz-transition: all 0.35s ease-in-out 0.35s;
          transition: all 0.35s ease-in-out 0.35s;
        }

        p {
          font-style: italic;
          font-size: 12px;
          position: relative;
          color: #bbb;
          padding: 10px 20px;
          text-align: center;
          opacity: 0;
          -webkit-transition: all 0.35s ease-in-out 0.35s;
          -moz-transition: all 0.35s ease-in-out 0.35s;
          transition: all 0.35s ease-in-out 0.35s;
        }
      }

      &:hover{
        .mask1 {
          -webkit-transform: rotate(59.5deg) translateX(1px);
          -moz-transform: rotate(59.5deg) translateX(1px);
          -ms-transform: rotate(59.5deg) translateX(1px);
          -o-transform: rotate(59.5deg) translateX(1px);
          transform: rotate(59.5deg) translateX(1px);
        }

        .mask2 {
          -webkit-transform: rotate(59.5deg) translateX(-1px);
          -moz-transform: rotate(59.5deg) translateX(-1px);
          -ms-transform: rotate(59.5deg) translateX(-1px);
          -o-transform: rotate(59.5deg) translateX(-1px);
          transform: rotate(59.5deg) translateX(-1px);
        }

        .info-box {
          width: 100%;
          height: 70px;
          visibility: visible;
          top: 15px;
          -webkit-transform: rotate(0deg) translate(0, 0);
          -moz-transform: rotate(0deg) translate(0, 0);
          -ms-transform: rotate(0deg) translate(0, 0);
          -o-transform: rotate(0deg) translate(0, 0);
          transform: rotate(0deg) translate(0, 0);

          h3, p {
            opacity: 1;
          }
        }
      }
    }

    &.effect5{
      .img {
        -webkit-transition: all 0.35s ease-in-out;
        -moz-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);
      }

      .info-box {
        background: #333333;
        opacity: 0;
        -webkit-transition: all 0.35s ease-in-out;
        -moz-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;

        h3 {
          text-transform: uppercase;
          color: #fff;
          text-align: center;
          font-size: 17px;
          padding: 10px;
          background: #111111;
          margin: 30px 0 0 0;
        }

        p {
          font-style: italic;
          font-size: 12px;
          position: relative;
          color: #bbb;
          padding: 20px 20px 20px;
          text-align: center;
        }
      }

      &.left_to_right {
        .info-box {
          -webkit-transform: scale(0) rotate(-180deg);
          -moz-transform: scale(0) rotate(-180deg);
          -ms-transform: scale(0) rotate(-180deg);
          -o-transform: scale(0) rotate(-180deg);
          transform: scale(0) rotate(-180deg);
        }

        &:hover {
          .img {
            -webkit-transform: scale(0);
            -moz-transform: scale(0);
            -ms-transform: scale(0);
            -o-transform: scale(0);
            transform: scale(0);
            -webkit-transition-delay: 0;
            -moz-transition-delay: 0;
            transition-delay: 0;
          }

          .info-box {
            visibility: visible;
            opacity: 1;
            -webkit-transform: scale(1) rotate(0deg);
            -moz-transform: scale(1) rotate(0deg);
            -ms-transform: scale(1) rotate(0deg);
            -o-transform: scale(1) rotate(0deg);
            transform: scale(1) rotate(0deg);
            -webkit-transition-delay: 0.3s;
            -moz-transition-delay: 0.3s;
            transition-delay: 0.3s;
          }
        }
      }

      &.right_to_left {
        .info-box {
          -webkit-transform: scale(0) rotate(180deg);
          -moz-transform: scale(0) rotate(180deg);
          -ms-transform: scale(0) rotate(180deg);
          -o-transform: scale(0) rotate(180deg);
          transform: scale(0) rotate(180deg);
        }

        &:hover {
          .img {
            -webkit-transform: scale(0);
            -moz-transform: scale(0);
            -ms-transform: scale(0);
            -o-transform: scale(0);
            transform: scale(0);
            -webkit-transition-delay: 0;
            -moz-transition-delay: 0;
            transition-delay: 0;
          }

          .info-box {
            visibility: visible;
            opacity: 1;
            -webkit-transform: scale(1) rotate(0deg);
            -moz-transform: scale(1) rotate(0deg);
            -ms-transform: scale(1) rotate(0deg);
            -o-transform: scale(1) rotate(0deg);
            transform: scale(1) rotate(0deg);
            -webkit-transition-delay: 0.3s;
            -moz-transition-delay: 0.3s;
            transition-delay: 0.3s;
          }
        }
      }
    }

    &.effect6{
      overflow: hidden;

      .img {
        -webkit-transition: all 0.35s ease-in-out;
        -moz-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);
      }

      .info-box {
        background: #333333;
        background: rgba(0, 0, 0, 0.6);
        visibility: hidden;
        opacity: 0;
        -webkit-transition: all 0.35s ease-in-out;
        -moz-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;

        h3 {
          text-transform: uppercase;
          color: #fff;
          text-align: center;
          font-size: 17px;
          padding: 10px;
          background: #111111;
          margin: 30px 0 0 0;
          -webkit-transition: all 0.35s ease-in-out;
          -moz-transition: all 0.35s ease-in-out;
          transition: all 0.35s ease-in-out;
        }

        p {
          font-style: italic;
          font-size: 12px;
          position: relative;
          color: #bbb;
          padding: 20px 20px 20px;
          text-align: center;
          -webkit-transition: all 0.35s 0.1s linear;
          -moz-transition: all 0.35s 0.1s linear;
          transition: all 0.35s 0.1s linear;
        }
      }

      &:hover {
        .img {
          -webkit-transform: scale(1.2);
          -moz-transform: scale(1.2);
          -ms-transform: scale(1.2);
          -o-transform: scale(1.2);
          transform: scale(1.2);
        }

        .info-box {
          visibility: visible;
          opacity: 1;
        }
      }

      &.from_top_and_bottom {
        .info-box {
          h3 {
            -webkit-transform: translateY(-100%);
            -moz-transform: translateY(-100%);
            -ms-transform: translateY(-100%);
            -o-transform: translateY(-100%);
            transform: translateY(-100%);
          }

          p {
            -webkit-transform: translateY(100%);
            -moz-transform: translateY(100%);
            -ms-transform: translateY(100%);
            -o-transform: translateY(100%);
            transform: translateY(100%);
          }
        }

        &:hover {
          .info-box{
            h3,p {
              -webkit-transform: translateY(0);
              -moz-transform: translateY(0);
              -ms-transform: translateY(0);
              -o-transform: translateY(0);
              transform: translateY(0);
            }
          }
        }
      }

      &.from_left_and_right {
        .info-box {
          h3 {
            -webkit-transform: translateX(-100%);
            -moz-transform: translateX(-100%);
            -ms-transform: translateX(-100%);
            -o-transform: translateX(-100%);
            transform: translateX(-100%);
          }

          p {
            -webkit-transform: translateX(100%);
            -moz-transform: translateX(100%);
            -ms-transform: translateX(100%);
            -o-transform: translateX(100%);
            transform: translateX(100%);
          }
        }

        &:hover {
          .info-box{
            h3,p {
              -webkit-transform: translateX(0);
              -moz-transform: translateX(0);
              -ms-transform: translateX(0);
              -o-transform: translateX(0);
              transform: translateX(0);
            }
          }
        }
      }

      &.top_to_bottom {
        .info-box {
          h3 {
            -webkit-transform: translateY(-100%);
            -moz-transform: translateY(-100%);
            -ms-transform: translateY(-100%);
            -o-transform: translateY(-100%);
            transform: translateY(-100%);
          }

          p {
            -webkit-transform: translateY(-100%);
            -moz-transform: translateY(-100%);
            -ms-transform: translateY(-100%);
            -o-transform: translateY(-100%);
            transform: translateY(-100%);
          }
        }

        &:hover {
          .info-box{
            h3,p {
              -webkit-transform: translateY(0);
              -moz-transform: translateY(0);
              -ms-transform: translateY(0);
              -o-transform: translateY(0);
              transform: translateY(0);
            }
          }
        }
      }

      &.bottom_to_top {
        .info-box {
          h3 {
            -webkit-transform: translateY(100%);
            -moz-transform: translateY(100%);
            -ms-transform: translateY(100%);
            -o-transform: translateY(100%);
            transform: translateY(100%);
          }

          p {
            -webkit-transform: translateY(100%);
            -moz-transform: translateY(100%);
            -ms-transform: translateY(100%);
            -o-transform: translateY(100%);
            transform: translateY(100%);
          }
        }

        &:hover {
          .info-box{
            h3,p {
              -webkit-transform: translateY(0);
              -moz-transform: translateY(0);
              -ms-transform: translateY(0);
              -o-transform: translateY(0);
              transform: translateY(0);
            }
          }
        }
      }
    }
  }
}
</style>