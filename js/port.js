
        var scene = new THREE.Scene();
        scene.background = new THREE.Color( 0x000000 );

        // 카메라 ( 카메라 수직 시야 각도, 가로세로 종횡비율, 시야거리 시작지점, 시야거리 끝지점
        var camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);

        // 렌더러 정의 및 크기 지정, 문서에 추가하기
        var renderer = new THREE.WebGLRenderer({
            antialias: true,
            preserveDrawingBuffer: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.querySelector('#wrap').appendChild(renderer.domElement);

        var light1 = new THREE.PointLight(0xffffff, 1, 100);
        // 위치를 적당한 지점에 놓고
        light1.position.set(1, 5, 5);
        // 장면에 추가
        scene.add(light1);

        //    
        var light2 = new THREE.PointLight(0xffFFFF, 1, 100);
        // 위치를 적당한 지점에 놓고
        light2.position.set(0, -5, 6);
        // 장면에 추가
        scene.add(light2);


        var loader = new THREE.TextureLoader();
        //
        var mesh;

        loader.load(
            'earth.jpg',
            function(texture) {
                mesh = new THREE.Mesh(

                    new THREE.IcosahedronGeometry(3, 5),
                    //                
                    new THREE.MeshStandardMaterial({
                        map: texture
                    })



                );
                mesh.name = 'Box1';
                scene.add(mesh);
            }
        );

        //var cube=Array();
        //			for(i=0,x=0,z=0;i<40;++i)
        //			{
        //				height = Math.random() * 2 + 1;
        //				// 정육면체 하나 만들기
        //				cube.push( new THREE.Mesh( 
        //					new THREE.IcosahedronGeometry( height,5), 
        //					new THREE.MeshStandardMaterial({ color: Math.round(Math.random() * 0xffffff)})
        //				));
        //				cube[i].position.x=(x-50);
        //				cube[i].position.y=height/1;
        //				cube[i].position.z=(z-50);
        //
        //				x++;
        //				if(i%5==4){ z++; x=0; }
        //
        //				// 생성한 모델을 장면에 추가합니다.
        //				scene.add( cube[i] );
        //			}



        var mesh2;
        loader.load(
            'sunjpg.jpg',
            function(texture) {
                mesh2 = new THREE.Mesh(
                    new THREE.IcosahedronGeometry(3, 5),
                    new THREE.MeshStandardMaterial({
                        map: texture
                    })
                );
                scene.add(mesh2);
                mesh2.position.set(15, 0, 0);
            }
        );

        // 큐브3
        //         var mesh3;
        //         loader.load(
        //            'unnamed.jpg', 
        //            function ( texture ) {
        //               mesh3 = new THREE.Mesh(
        //                  new THREE.IcosahedronGeometry(3, 5), 
        //                  new THREE.MeshStandardMaterial({map: texture})
        //               );
        //               scene.add(mesh3);
        //               mesh3.position.set(-15, 0, 0);
        //            }
        //         );
         var Num = 5;
        camera.position.z = Num;

        camera.position.y = 7;
        camera.rotation.x = -35 * (Math.PI / 180);

        camera.position.x = 5;
        camera.rotation.y = 35 * (Math.PI / 180);

        //         카메라 컨트롤러 추가
        var controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.update();
        console.log(controls);
        
        
//     (function(){ alert("Hello"); }, 3000);
        //click event

        window.onload = function() {
            var header = document.querySelector('#wrap');
            var text = document.querySelector('.textbox');
            header.onclick =  function() {
	constraint.dollyOut( getZoomScale(5) );
                text.style.opacity ="0";
           
                header.onclick = null;
            };
        };
        
        
        
        
                //---------------------------------------------반응형-------------
        var tanFOV = Math.tan(((Math.PI / 180) * camera.fov / 2));
        var windowHeight = window.innerHeight;



        // Event Listeners
        // -----------------------------------------------------------------------------
        window.addEventListener('resize', onWindowResize, false);

        function onWindowResize(event) {

            camera.aspect = window.innerWidth / window.innerHeight;

            // adjust the FOV
            camera.fov = (360 / Math.PI) * Math.atan(tanFOV * (window.innerHeight / windowHeight));

            camera.updateProjectionMatrix();
            camera.lookAt(scene.position);

            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.render(scene, camera);

        }

        
        

        var animate = function() {
            requestAnimationFrame(animate);
  
            mesh.rotation.y += 0.005;
            mesh2.rotation.y += 0.005;

            renderer.render(scene, camera);
        };

        animate();






        //a end//