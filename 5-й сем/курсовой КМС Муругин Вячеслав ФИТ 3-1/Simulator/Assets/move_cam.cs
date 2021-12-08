using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class move_cam : MonoBehaviour
{
    [SerializeField]

    Transform targetPos;
    [SerializeField] Dropdown CameraDropdown;
    int sensivity = 3;
    [SerializeField]

    float scrollSpeed = 2f;

    [SerializeField]

    int maxdistance = 50;

    int mindistance = 0;
    // Start is called before the first frame update
    bool ControlDistance(float distance)

    {

        if (distance > mindistance && distance < maxdistance) return true;

        return false;

    }
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        // ДВИЖЕНИЕ В СТОРОНЫ КЛАВИШАМИ

        float x = Input.GetAxis("Horizontal"); // клавиши A, D

        float y = Input.GetAxis("Vertical"); // клавиши W, S
        if (Input.GetMouseButton(1))

        {
            ChangeDropdown();
            transform.RotateAround(targetPos.position, Vector3.up, Input.GetAxis("Mouse X") * sensivity);

            transform.Rotate(Vector3.left, Input.GetAxis("Mouse Y") * sensivity);

        }
        if (x != 0 || y != 0)

        {
            ChangeDropdown();
            Vector3 newpos = transform.position + (transform.TransformDirection(new Vector3(x, 0, 0)) + Vector3.up * y) / sensivity;

            if (ControlDistance(Vector3.Distance(newpos, targetPos.position))) transform.position = newpos;

        }

        // ПРИБЛИЖЕНИЕ И УДАЛЕНИЕ ПРОКРУТКОЙ КОЛЕСА МЫШИ

        if (Input.GetAxis("Mouse ScrollWheel") != 0)

        {
            ChangeDropdown();
            Vector3 newpos = transform.position + transform.TransformDirection(Vector3.forward * Input.GetAxis("Mouse ScrollWheel") * scrollSpeed);

            if (ControlDistance(Vector3.Distance(newpos, targetPos.position))) transform.position = newpos;

        }
        
    }
    void ChangeDropdown()
    {
        if (CameraDropdown.value != 0)
            CameraDropdown.value = 0;
    }
}
