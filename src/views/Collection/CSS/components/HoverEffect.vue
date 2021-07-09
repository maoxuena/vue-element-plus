<template>
  <div class="hover-effect-page">
    <h2>鼠标悬停图片动画过渡特效</h2>
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
              <div class="hover-effect circle left_to_right effect5">
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
              <div class="hover-effect circle right_to_left effect5">
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
              <div class="hover-effect circle top_to_bottom effect5">
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
              <div class="hover-effect circle bottom_to_top effect5">
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
          <span>Circle Hover effect 6</span>
        </div>
      </template> 
      <div class="hover-effect-container flex-box">
        <div class="hover-effect-box">
          <div class="hover-effect-item">
            <div class="content">
              <div class="hover-effect circle left_to_right effect6">
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
              <div class="hover-effect circle right_to_left effect6">
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
              <div class="hover-effect circle top_to_bottom effect6">
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
              <div class="hover-effect circle bottom_to_top effect6">
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
              <div class="hover-effect circle right_to_left effect8">
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
              <div class="hover-effect circle top_to_bottom effect8">
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
              <div class="hover-effect circle bottom_to_top effect8">
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
              <div class="hover-effect circle left_to_right effect10">
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
              <div class="hover-effect circle right_to_left effect10">
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
    border-radius: 50%;
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
  }

  &.square {
    border: 8px solid #fff;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
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
  
  &.effect6{
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
  
  &.effect7{
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
  
  &.effect8{
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
  
  &.effect9{
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
  
  &.effect10{
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
  
  &.effect11{
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
  
  &.effect12{
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
}
</style>